import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";

/**
 * @description - This tools recives a topic and returns an simple explanation of the topic
 */
function ExplainTopicTool() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleOnClick = () => {
    // TODO: fetch to the api to get the explanation
    setExplanation(topic); // for now, the explanation is the same as the topic
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
      value: explanation
    },
    action: {
      text: "Explicar",
      onClick: handleOnClick
    },
  }

  return <BasicToolTemplate toolData={toolData} />
}

export default ExplainTopicTool;