import {useState} from 'react';
import BasicToolTemplate from "./basic.tool.template.component";
import * as ToolsApi from "../../lib/tools";
import Tools from "../../tools/tools";

/**
 * @description - This tools recives a topic and returns an simple explanation of the topic
 */
function ExplainTopicTool() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("" as string | undefined);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await ToolsApi.promptWith(Tools.SIMPLE_EXPLANATION, { input: topic });
    setExplanation(response.explanation);
    setError(response.error);
    setIsLoading(false);
  }

  let toolData = {
    tool: {
      name: "Explicar tema",
      description: "Explica un tema de forma simple"
    },
    input: {
      label: "Tema",
      placeholder: "Niveles de energía de los átomos",
      value: topic,
      onChange: (e: any) => setTopic(e.target.value)
    },
    output: {
      label: "Explicación",
      value: explanation,
      error
    },
    action: {
      text: "Explicar",
      onClick: handleOnClick,
      isLoading
    },
  }

  return <BasicToolTemplate {...toolData}/>
}

export default ExplainTopicTool;