import { PrismaClient } from "./../../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createApartment = async (req: Request, res: Response):Promise<void> => {
  try {
    const {
      title,
      details,
      price,
      imageUrl,
      bedrooms,
      bathrooms,
      isPetAllowed,
      propertyTypeId,
      locationId,
      userId,
    } = req.body;

    const newApartment = await prisma.apartment.create({
      data: {
        title,
        details,
        price,
        imageUrl,
        bedrooms,
        bathrooms,
        isPetAllowed,
        propertyType: { connect: { id: propertyTypeId } },
        location: { connect: { id: locationId } },
        user: { connect: { id: userId } },
      },
    });
    if (!newApartment) {
       res.status(400).json({ message: "could not create apartment" });
       
    }
      res.status(201).json({newApartment: newApartment, message: 'Apartment created succesfully'});
      
  } catch (error) {
    console.error("Error creating apartment:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};


export const findApartments = async (req: Request, res:Response): Promise<void> => {
  try {
    const apartments = await prisma.apartment.findMany()
    res.status(200).json({apartments: {apartments}})
  } catch (error) {
    console.error(error)
  }
}