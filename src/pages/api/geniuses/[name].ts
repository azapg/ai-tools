import {Configuration, OpenAIApi} from "openai";
import type {NextApiRequest, NextApiResponse} from 'next'
import {basicPrompt} from "../../../geniuses/prompts";
import {encode} from 'gpt-3-encoder';

const configuration =
    new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ response: string, error?: string }>
) {
  let {name, topics, input, model} = req.query
  if (typeof input !== 'string' || input.length < 1 || input.length > 1024) {
    res.status(400).json({response: `El mensaje no es claro para ${name}`})
    return;
  }

  const tokenized = encode(input);
  if (tokenized.length > 250) {
    res.status(400).json({response: `El mensaje es demasiado largo para ${name}`})
    return;
  }

  if (typeof topics !== 'string' || !topics) {
    topics = "cultura general"
  }

  if (!model || typeof model !== 'string') {
    model = "text-davinci-002"
  }

  const prompt = basicPrompt(input, topics);

  // moderation
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({ input: prompt })
  };
  const moderationResponse = await fetch('https://api.openai.com/v1/moderations', requestOptions);
  const moderation = await moderationResponse.json();

  if(moderation.results[0].flagged) {
    res.status(400).json({response: "", error: "No puedes mandar mensajes con contenido inapropiado."})
    return;
  }

  try {
    const response = await openai.createCompletion({
      model,
      prompt: `${prompt} ${input} \n${name}:`,
      temperature: 0.5,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 0,
      stop: ["Estudiante:"],
    });

    const answer = (response.data.choices ?? [null])[0];
    if (!answer) {
      res.status(500).json({response: `${name} no pudo responder a esto.`})
      return;
    }

    res.status(200).json({response: answer?.text?.trim() ?? `${name} no tiene respuesta para esto.`})
  } catch (error) {
    res.status(500).json({response: `${name} no pudo responder a esto.`})
  }
}