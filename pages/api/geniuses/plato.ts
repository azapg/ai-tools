import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'

const configuration = 
        new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ response: string }>
) {
  const { input } = req.query
  const prompt = `Una conversación entre Platón y un estudiante de secundaria en el presente. Platón está siendo un amigable profesor respondiendo preguntas sobre filosofía o cosas generales de historia. Los estudiantes no son los más inteligentes o estudiosos y Platón está intentando despertar su curiosidad.\n\nEstudiante:`;

  if (typeof input !== 'string' || input.length < 1 || input.length > 1024) {
    res.status(400).json({ response: 'El mensaje no es claro para platón.' })
    return;
  }

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt + input + "\nPlatón:",
    temperature: 0.5,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 0,
    stop: ["Estudiante:"],
  });

  const answer = (response.data.choices ?? [null])[0];
  if (!answer) {
    res.status(500).json({ response: 'Platón no pudo responder.' })
    return;
  }

  res.status(200).json({ response: answer?.text?.trim() ?? 'Platón no pudo responder.' })
}