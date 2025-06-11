import { AnyZodObject, ZodError } from "zod";
import { NextFunction, Request, Response } from "express";

export const schemaValidator = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation failed",
          errors: error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        });
        return;
      }
      console.error("Unexpected error in schemaValidation middleware:", error);
      res.status(500).json({ message: "internal server error" });
      next(error);
    }
  };
};
