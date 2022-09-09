import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";

function GrammarCorrectionTool() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleOnClick = () => {
    setCorrection(text);
  }

  let toolData = {
    tool: {
      name: "Corregir gramática y ortografía",
      description: "Corrige la gramática y ortografía de un texto",
    },
    input: {
      label: "Texto",
      placeholder: "Escribe un texto...",
      value: text,
      onChange: (e: any) => setText(e.target.value)
    },
    output: {
      label: "Corrección",
      value: correction
    },
    action: {
      text: "Corregir",
      onClick: handleOnClick
    },
  }

  return <BasicToolTemplate toolData={toolData} />
}

export default GrammarCorrectionTool;