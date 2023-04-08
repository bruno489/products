import { Router } from "express";
import categoryControllers from "../controllers/categoryControllers";
import authMiddleware from "../middleWares/authMiddleWare";

const router = Router()

router.get('/category', authMiddleware, categoryControllers.getAllCategories)

export default router