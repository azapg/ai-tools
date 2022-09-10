import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  explanation: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { topic } = req.query
  if (typeof topic !== 'string') {
    res.status(400).json({ explanation: 'No se puede obtener una explicación de este tema' })
  }

  res.status(200).json({ explanation: "GPT-3 está desactivado" })
}


// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: `Explica de ${topic} para un niño de 5 años:\n\n`,
//   temperature: 0.7,
//   max_tokens: 64,
//   top_p: 1.0,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
// });