import { useState } from 'react';
import BasicToolTemplate from "./basic.tool.template.component";
import * as ToolsApi from "../../lib/tools";
import Tools from "../../tools/tools";

function GrammarCorrectionTool() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await ToolsApi.promptWith(Tools.GRAMMAR_CORRECTION, { input: text });
    setCorrection(response);
    setIsLoading(false);
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
      onClick: handleOnClick,
      isLoading
    },
  }

  return <BasicToolTemplate toolData={toolData} />
}

export default GrammarCorrectionTool;