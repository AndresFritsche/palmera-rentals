import express, {Request, Response} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import apartmentRouter  from './routes/apartment.routes'


const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(apartmentRouter)

export default app