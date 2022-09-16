// this is terrible solution, to keep it simple only use input, topic, question, subject, grade as query params
import Tool from "./tools";

const GRAMMAR_PROMPT = (input: string) => `Eres un programa para corregir ortografía y gramática del español.\nEntiendes de manera perfecta la jerga de los jóvenes, pero la corriges a un español más estandarizado y académico. Recuerdo que el texto es escrito por jóvenes de américa latina.\n\nTarea: Modifica el texto agregando tildes y otros puntos de acentuación [IMPORTANTE]. El resultado debe ser un texto académico. Completa las palabras incompletas guiándote por el contexto.\n \nUsa este formato:\nTexto: \${Texto a corregir}\nTexto corregido: \${Texto corregido}\nEmpieza.\n\nTexto: ${input}\nTexto corregido:`;
const KEY_POINTS = (topic: string) => `Escribe los 5 puntos claves a la hora de estudiar sobre ${topic}. Los puntos deben ser una oración y fáciles de comprender. También deben sugerir nuevas ideas para poder investigarlas y aprender sobre ellas. Incluye solo lo más importante. Recuerda que los puntos son para una persona que no sabe nada del tema. Responde en español`;
const SIMPLE_EXPLANATION = (topic: string) => `Eres una inteligencia artificial que explica temas complejos de manera simple, clara y con ejemplos y analogías. Todas tus respuestas deben reales. Tus respuestas no deben ser tan extensas.\n\nCuando alguien te pregunte sobre un tema te puede especificar si quiere una explicación más matemática, histórica, científica, artística, etc. En ese caso tendrás que explicarlo de esa manera en específico.\n\nEmpieza.\n\nPetición: ${topic}\nExplicación:`;
const ANSWERING_BOT = (question: string) => `Soy un robot responde preguntas extremadamente inteligente. ¡Pregúntame lo que sea, siempre tengo una respuesta! Respondo de manera amigable.\n\nPregunta: ${question}\nRespuesta:`;
const EXAMN_QUESTIONS = (subject: string, grade: number, topic: string) => `Crea un examen de 5 preguntas de ${subject} sobre ${topic} para un grupo de ${grade}° Grado. En español.\n\nEmpieza.`;

const promptOf = (tool: Tool, query: any): string | null => {
  switch (tool) {
    case Tool.GRAMMAR_CORRECTION:
      if(!query.input) return null;
      return GRAMMAR_PROMPT(query.input);
    case Tool.EXAMN_QUESTIONS:
      if(!query.topic) return null;
      return EXAMN_QUESTIONS(query.subject, query.grade, query.topic);
    case Tool.ANSWERING_BOT:
      if(!query.question) return null;
      return ANSWERING_BOT(query.question);
    case Tool.SIMPLE_EXPLANATION:
      if(!query.input) return null;
      return SIMPLE_EXPLANATION(query.input);
    case Tool.KEY_POINTS:
      if(!query.topic) return null;
      return KEY_POINTS(query.topic);
    default:
      return null;
  }
}

export default promptOf;