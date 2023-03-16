import { Router } from 'express';
import ChatGptController from '../controllers/ChatGptController';
import tokenController from '../controllers/tokenController';

const router = Router();

// Send promp to GPT3
router.post('/GPT3', ChatGptController.sendPrompt);
router.post('/GPT3/category', ChatGptController.findCategory);
router.post('/GPT3/answerDontIdentified', ChatGptController.answerDontIdentified);

export default router;
