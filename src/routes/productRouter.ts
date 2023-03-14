import { Router } from 'express';
import validateBody from '../middlewares/productMiddleware';
import productController from '../controllers/productController';

const router = Router();

router.post('/', validateBody, productController.create);
router.get('/', productController.getAll);

export default router;