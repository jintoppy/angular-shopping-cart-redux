import express from 'express';
import {getProducts,addProduct, getProductById} from '../controllers/product';
import {validateUser} from '../controllers/user';

const router = express.Router();
router.use(validateUser);
router.get('/:productId', getProductById);
router.get('/', getProducts);
router.post('/', addProduct);

export default router;

