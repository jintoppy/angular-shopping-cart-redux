import express from 'express';
import ProductRouter from './product';
import UserRouter from './user';

const router = express.Router();

router.use('/products', ProductRouter);
router.use('/users', UserRouter);

export default router;

