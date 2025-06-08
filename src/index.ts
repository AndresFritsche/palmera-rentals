import express from 'express'
import dotenv from 'dotenv';
dotenv.config();



export const app = express()
const PORT = process.env.PORT



app.listen(PORT, () =>{
    console.log('app is working')
})

