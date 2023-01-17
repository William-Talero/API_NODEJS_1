import { Router } from 'express';
import tokenController from './../controllers/tokenController';

const router = Router();

// Create token
router.get('/token', tokenController.getGeneratedToken);

export default router;
