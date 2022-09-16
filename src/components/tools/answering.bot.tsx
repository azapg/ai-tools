import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";
import * as ToolsApi from "../../lib/tools";
import Tools from "../../tools/tools";

function AnsweringBotTool() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("" as string | undefined);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await ToolsApi.promptWith(Tools.ANSWERING_BOT, { question });
    setAnswer(response.explanation);
    setError(response.error);
    setIsLoading(false);
  }

  let toolData = {
    tool: {
      name: "Bot responde preguntas",
      description: "Preguntale algo y te responderá.",
    },
    input: {
      label: "Texto",
      placeholder: "Escribe un pregunta",
      value: question,
      onChange: (e: any) => setQuestion(e.target.value)
    },
    output: {
      label: "Respuesta",
      value: answer,
      error
    },
    action: {
      text: "Preguntar",
      onClick: handleOnClick,
      isLoading
    },
  }

  return <BasicToolTemplate {...toolData} />
}

export default AnsweringBotTool;