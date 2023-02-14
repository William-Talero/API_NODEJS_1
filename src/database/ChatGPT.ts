import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const sendPrompt = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'curie:ft-creasistemas-2023-02-13-23-51-12',
    prompt: prompt,
    max_tokens: 100,
    temperature: 0,
    presence_penalty: 0,
    best_of: 1,
    n: 1,
    stream: false,
    stop: ["human:", "AI:", "ai:", "AI :" ]
  });
  console.log(response.data.choices[0].text);
  const answer =
    response.data.choices[0].text !== undefined
      ? response.data.choices[0].text.replace(/\n/g, '')
      : "I don't know";
  return answer;
};

export default {
  sendPrompt
};
