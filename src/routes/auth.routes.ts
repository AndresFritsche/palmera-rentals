import { login, register } from "../controllers/auth.controller";
import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

const authRouter = Router()

authRouter.post('/auth/login',schemaValidator(loginSchema), login)
authRouter.post('/auth/register',schemaValidator(registerSchema), register)

export default authRouter