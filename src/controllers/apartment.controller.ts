import { PrismaClient } from "./../../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createApartment = async (
  req: Request,
  res: Response
): Promise<void> => {
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
    res.status(201).json({
      newApartment: newApartment,
      message: "Apartment created succesfully",
    });
  } catch (error) {
    console.error("Error creating apartment:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const findApartments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const apartments = await prisma.apartment.findMany();
    if (!apartments) {
      res.status(404).json({ message: "apartments not found" });
    }
    res.status(200).json({ apartments });
  } catch (error) {
    console.error(error);
  }
};

export const findApartmentsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const apartment = await prisma.apartment.findFirstOrThrow({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ apartment });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Apartment not found or an error occurred." });
  }
};

export const updateApartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
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

    const updatedApartment = await prisma.apartment.update({
      where: { id: Number(id) },
      data: {
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
      },
    });
    if (!updatedApartment) {
      res.status(400).json({ message: "please enter valid data" });
    }
    res.status(200).json({ updatedApartment });
  } catch (error) {
    console.error(error);
  }
};

export const deleteApartment = async (req:Request, res:Response) => {
  const { id } = req.params
  const _deleteApartment = await prisma.apartment.delete({
    where : { id: Number(id) }
  })

  if(!_deleteApartment){
    res.status(400).json({message: 'error deleting apartment'})
  }
  res.status(200).json({message: 'the apartment has been deleted'})
}
