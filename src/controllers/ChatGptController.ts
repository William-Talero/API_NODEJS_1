import ChatGPTService from "../services/ChatGPTService";

const sendPrompt = async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const answer = await ChatGPTService.sendPrompt(prompt);
  res.status(200).send({ status: 'OK', data: answer });
};

const findCategory = async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const answer = await ChatGPTService.findCategory(prompt);
  res.status(200).send({ status: 'OK', data: answer });
};

const answerDontIdentified = async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const answer = await ChatGPTService.answerDontIdentified(prompt);
  res.status(200).send({ status: 'OK', data: answer });
};

export default {
  sendPrompt,
  findCategory,
  answerDontIdentified
};
