import { Router } from 'express';
import ChatGptController from '../controllers/ChatGptController';
import tokenController from '../controllers/tokenController';

const router = Router();

// Send promp to GPT3
router.post('/GPT3', tokenController.verifiedToken, ChatGptController.sendPrompt);

export default router;
