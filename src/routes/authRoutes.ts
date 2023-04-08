import { Router } from "express";
import authControllers from "../controllers/authControllers";

const router = Router()

router.post('/auth/login', authControllers.authenticate)

export default router