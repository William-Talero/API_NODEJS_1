import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const sendPrompt = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Esta es una lista de categorias:\nTarjeta de crédito, Tarjeta de debíto y creditos.\n\nEsta frase \"${prompt}\", a cual de las categorias anteriores pertenece:\nTarjeta de crédito.`,
    max_tokens: 100,
    temperature: 0,
    presence_penalty: 0,
    best_of: 1,
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
