import { Router } from "express";
import productControllers from "../controllers/productControllers";
import authMiddleware from "../middleWares/authMiddleWare";

const router = Router()

router.get('/product', authMiddleware, productControllers.getAllProducts)
router.get('/product/:id', authMiddleware, productControllers.getProductById)

router.patch('/product/:id', authMiddleware, productControllers.editProductById)

router.post('/product', authMiddleware, productControllers.createProduct)

router.delete('/product/:id', authMiddleware, productControllers.deleteProductById)

export default router