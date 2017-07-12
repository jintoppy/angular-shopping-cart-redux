import express from 'express';
import {register, signin, getAllUsers} from '../controllers/user';

const router = express.Router();

router.post('/signin', signin);
router.post('/register', register);
router.get('/', getAllUsers);

export default router;

