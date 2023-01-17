import { Router } from 'express';
import apiTestController from './../controllers/apiTestController';
import tokenController from '../controllers/tokenController';

const router = Router();

// Create API test
router.post('/apiTest', tokenController.verifiedToken, apiTestController.createApiTest);

// Get all API test
router.get('/apiTest', tokenController.verifiedToken, apiTestController.getAllApiTest);

// Get specific API test
router.get('/apiTest/:id', tokenController.verifiedToken, apiTestController.getSpecificApiTest);

// Update specific API test
router.put('/apiTest/:id', tokenController.verifiedToken, apiTestController.updateSpecificApiTest);

// Delete specific API test
router.delete('/apiTest/:id', tokenController.verifiedToken, apiTestController.deleteSpecificApiTest);

export default router;
