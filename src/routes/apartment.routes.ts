import { Router } from 'express';
import { createApartment, deleteApartment, findApartments, findApartmentsById, updateApartment } from '../controllers/apartment.controller';
import { schemaValidator } from '../middlewares/schemaValidator.middleware';
import { apartmentSchema } from '../schemas/apartment.schema';

const apartmentRouter = Router()

apartmentRouter.get('/apartments',findApartments)
apartmentRouter.get('/apartment/:id', findApartmentsById)
apartmentRouter.post('/apartment/create',schemaValidator(apartmentSchema), createApartment)
apartmentRouter.put('/apartment/update/:id',schemaValidator(apartmentSchema) , updateApartment)
apartmentRouter.delete('/apartment/delete/:id', deleteApartment)

export default apartmentRouter