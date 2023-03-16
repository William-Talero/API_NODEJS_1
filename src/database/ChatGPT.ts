import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const sendPrompt = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Lista de texto y respuesta:\nTarjeta de crédito - > Gracias por solicitar una tarjeta de crédito, para mas información comuiquese al siguiente número 01-800-0123838, Tarjeta débito -> Gracias por solicitar una tarjeta de débito, tendra que acercarse a la oficina de manera presencial, Inversión -> Invertir es una de las mejores decisiones que puede tomar y en Davivienda lo orientaremos para invertir de la mejor manera, Prestamo -> A continuación le mostraremos las opciones de crédito que tiene disponibles, Saludo -> Hola, gracias por comunicarse con el ChatBot de Davivienda.\n\nResponde este texto \"${prompt}\" con el listado anterior, personalizando el mensaje de la manera mas adecuada para el usuario:`,
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(response.data.choices[0].text);
  const answer =
    response.data.choices[0].text !== undefined
      ? response.data.choices[0].text.replace(/\n/g, '')
      : "I don't know";
  return answer;
};

const findCategory = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Lista de categorias:\nTarjeta de cédito, Tarjeta de débito, Prestamo, Saludo, Inversión, No identificada\n\n¿El texto  \"${prompt}\" a cual categoria de la lista pertenece?\n\nCategoria:\n`,
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(response.data.choices[0].text);
  const answer =
    response.data.choices[0].text !== undefined
      ? response.data.choices[0].text.replace(/\n/g, '')
      : "I don't know";
  return answer;
};

const answerDontIdentified = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Respondele de manera amable esta pregunta al usuario \"${prompt}\" y posterior informale que esta comunicado con Davienda que una entidad financiera y las preguntas deben girar entorno a esto, pero respondele su pregunta:\n`,
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(response.data.choices[0].text);
  const answer =
    response.data.choices[0].text !== undefined
      ? response.data.choices[0].text.replace(/\n/g, '')
      : "I don't know";
  return answer;
};

export default {
  sendPrompt,
  findCategory,
  answerDontIdentified
};
