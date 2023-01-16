import { Router } from 'express';
import apiTestController from 'src/controllers/apiTestController';

const router = Router();

// Create API test
router.post('/apiTest', apiTestController.createApiTest);

// Get all API test
router.get('/apiTest', apiTestController.getAllApiTest);

// Get specific API test
router.get('/apiTest/:id', apiTestController.getSpecificApiTest);

// Update specific API test
router.put('/apiTest/:id', apiTestController.updateSpecificApiTest);

// Delete specific API test
router.delete('/apiTest/:id', apiTestController.deleteSpecificApiTest);

export default router;
