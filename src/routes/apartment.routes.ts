import { Router } from 'express';
import { createApartment } from '../controllers/apartment.controller';

const apartmentRouter = Router()

apartmentRouter.post('/apartment/create', createApartment)

export default apartmentRouter