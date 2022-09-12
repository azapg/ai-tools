import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";
import * as ToolsApi from "../../lib/tools";
import Tools from "../../tools/tools";

function KeyPointsTool() {
  const [topic, setTopic] = useState("");
  const [points, setPoints] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await ToolsApi.promptWith(Tools.KEY_POINTS, { topic });
    setPoints(response);
    setIsLoading(false);
  }

  let toolData = {
    tool: {
      name: "Puntos claves",
      description: "Genera puntos claves de un tema en específico.",
    },
    input: {
      label: "Tema",
      placeholder: "Ej: El coronavirus",
      value: topic,
      onChange: (e: any) => setTopic(e.target.value)
    },
    output: {
      label: "Puntos clave",
      value: points
    },
    action: {
      text: "Generar",
      onClick: handleOnClick,
      isLoading
    },
  }

  return <BasicToolTemplate {...toolData} />
}

export default KeyPointsTool;