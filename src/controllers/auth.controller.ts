import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { Request, Response } from "express";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";
import { PrismaClient } from "./../../generated/prisma";
import  jwt  from "jsonwebtoken";

const prisma = new PrismaClient();
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = loginSchema.parse(req.body);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    res.status(500).json({ message: "Internal server error" });
  }
};



export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName , email, password, phone } = registerSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        phone
      },
    });

    console.log("New user created:", newUser);

    // Token
    const token = jwt.sign({id: newUser.id}, process.env.TOKEN_SECRET || 'TOKEN TEST')
    console.log(token)


    if (!newUser) {
      res.status(500).json({ message: "User creation failed" });
    }

    res.header('auth-token', token).status(201).json({ message: "User registered successfully", newUser: newUser });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    console.error("Unhandled error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
