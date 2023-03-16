import ChatGPT from '../database/ChatGPT';

const sendPrompt = (prompt) => {
  const answer = ChatGPT.sendPrompt(prompt);
  return answer;
};

const findCategory = (prompt) => {
  const answer = ChatGPT.findCategory(prompt);
  return answer;
};

const answerDontIdentified = (prompt) => {
  const answer = ChatGPT.answerDontIdentified(prompt);
  return answer;
};

export default {
  sendPrompt,
  findCategory,
  answerDontIdentified
};
