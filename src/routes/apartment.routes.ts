import { Router } from 'express';
import { createApartment, findApartments, findApartmentsById } from '../controllers/apartment.controller';

const apartmentRouter = Router()

apartmentRouter.get('/apartments', findApartments)
apartmentRouter.get('/apartment/:id', findApartmentsById)
apartmentRouter.post('/apartment/create', createApartment)

export default apartmentRouter