import type {NextApiRequest, NextApiResponse} from 'next'
import {Configuration, OpenAIApi} from 'openai';
import optionsOf from "../../../tools/options";
import Tool from "../../../tools/tools";

type Data = {
  explanation: string
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {tool} = req.query
  if (!tool || typeof tool !== 'string') {
    res.status(400).json({explanation: 'Herramienta no encontrada. Por favor habla con alguien de la exposición.'})
    return;
  }

  const options = optionsOf(tool as Tool, req.query);
  if (!options) {
    res.status(400).json({explanation: 'Herramienta no encontrada. Por favor habla con alguien de la exposición.'})
    return;
  }

  const response = await openai.createCompletion(options);

  const answer = (response.data.choices ?? [null])[0];
  if (!answer) {
    res.status(500).json({explanation: 'No hay respuesta. Por favor habla con alguien de la exposición.'})
    return;
  }

  res.status(200).json({explanation: answer?.text?.trim() ?? 'No hay respuesta. Por favor habla con alguien de la exposición.'})
}