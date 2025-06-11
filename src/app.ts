import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import apartmentRouter  from './routes/apartment.routes'
import authRouter from './routes/auth.routes'


const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(apartmentRouter)
app.use(authRouter)

export default app