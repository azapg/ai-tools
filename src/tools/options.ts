import promptOf from "./tools.prompts";
import {CreateCompletionRequest} from "openai";
import Tool from "./tools";

const optionsOf = (tool: Tool, query: any): CreateCompletionRequest | null => {
  const prompt = promptOf(tool, query);
  if (!prompt) {
    return null;
  }
  switch (tool) {
    case Tool.GRAMMAR_CORRECTION:
      return {
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 350,
        top_p: 1.0,
      }
    case Tool.EXAMN_QUESTIONS:
      return {
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 350,
        top_p: 1.0,
      }
    case Tool.ANSWERING_BOT:
      return {
        model: "text-davinci-002",
        prompt,
        max_tokens: 350,
      }
    case Tool.SIMPLE_EXPLANATION:
      return {
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 350,
        top_p: 1.0,
      }
    case Tool.KEY_POINTS:
      return {
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 350,
        top_p: 1.0,
      }
    default:
      return null;
  }
}

export default optionsOf;