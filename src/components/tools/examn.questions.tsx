import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";
import * as ToolsApi from "../../lib/tools";
import Tools from "../../tools/tools";

function ExamnQuestionsTool() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("" as string | undefined);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await ToolsApi.promptWith(Tools.EXAMN_QUESTIONS, { topic });
    setQuestions(response.explanation);
    setError(response.error);
    setIsLoading(false);
  }

  let toolData = {
    tool: {
      name: "Generar preguntas de examen",
      description: "Genera preguntas de examen para un tema en específico.",
    },
    input: {
      label: "Tema del examen",
      placeholder: "Escribe un tema para hacer preguntas",
      value: topic,
      onChange: (e: any) => setTopic(e.target.value)
    },
    output: {
      label: "Preguntas",
      value: questions,
      error
    },
    action: {
      text: "Generar",
      onClick: handleOnClick,
      isLoading
    },
  }

  return <BasicToolTemplate {...toolData} />
}

export default ExamnQuestionsTool;