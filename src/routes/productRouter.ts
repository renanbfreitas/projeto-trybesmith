import { Router } from 'express';
import validateBody from '../middlewares/productMiddleware';
import productController from '../controllers/productController';

const router = Router();

router.post('/', validateBody, productController.create);

export default router;