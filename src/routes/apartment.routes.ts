import { Router } from 'express';
import { createApartment, findApartments, findApartmentsById, updateApartment } from '../controllers/apartment.controller';

const apartmentRouter = Router()

apartmentRouter.get('/apartments', findApartments)
apartmentRouter.get('/apartment/:id', findApartmentsById)
apartmentRouter.post('/apartment/create', createApartment)
apartmentRouter.put('/apartment/update/:id', updateApartment)

export default apartmentRouter