import { Router } from 'express';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';

const router = Router();

// Create user
router.post('/users', tokenController.verifiedToken, userController.createUser);

// Get all users
router.get('/users', tokenController.verifiedToken, userController.getAllUsers);

// Get specific user
router.get('/users/:id', tokenController.verifiedToken, userController.getSpecificUser);

// Update specific user
router.put('/users/:id', tokenController.verifiedToken, userController.updateSpecificUser);

// Delete specific user
router.delete('/users/:id', tokenController.verifiedToken, userController.deleteSpecificUser);

export default router;
