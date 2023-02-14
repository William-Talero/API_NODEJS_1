import ChatGPT from '../database/ChatGPT';

const sendPrompt = (prompt) => {
  const answer = ChatGPT.sendPrompt(prompt);
  return answer;
};

export default {
  sendPrompt,
};
