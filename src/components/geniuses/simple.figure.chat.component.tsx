import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import * as Geniuses from "../../lib/geniuses";
import dropdownItems from "./models";
import Figure from "./figure.component";
import ArrowDownIcon from "../icons/arrow.down.icon";

/**
 *
 * @param with The genius to talk with (e.g. 'einstein')
 * @returns
 */

function FigureTalk(props: { with: string }) {
  const withFigure =
    dropdownItems
      .flatMap((item) => item.figures)
      .find((figure) => figure.key === props.with) ??
    dropdownItems[0].figures[0];

  const [input, setInput] = useState("");
  const [figureResponse, setFigureResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentFigure, setCurrentFigure] = useState(withFigure);

  const figureList = dropdownItems.flatMap((section) => section.figures);

  const handleSend = async () => {
    if (input.length === 0) return;
    setIsLoading(true);
    const response = await Geniuses.select(currentFigure.key).ask(input);
    setFigureResponse(response);
    setIsLoading(false);
  };

  const handleSelectFigure = (key: string) => {
    const result = figureList.filter((figure) => figure.key === key);
    if (result.length < 1) return;
    const figure = result[0];
    setCurrentFigure(figure);
  };

  return (
    <Card variant="bordered" css={{ backgroundColor: "$black", position: "block"}}>
      <Dropdown disableAnimation disableTriggerPressedAnimation placement="bottom-left">
        <Dropdown.Trigger>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-around", position: "block" }}
          >
            <Figure {...currentFigure} />
            <ArrowDownIcon />
          </Card.Header>
        </Dropdown.Trigger>

        <Dropdown.Menu onAction={(selected) => handleSelectFigure(selected as string)}>
          {dropdownItems.map((section) => (
            <Dropdown.Section key={section.key} title={section.label}>
              {section.figures.map((figure) => (
                <Dropdown.Item
                  key={figure.key}
                  title={figure.name}
                  description={figure.description}
                  icon={<Avatar squared src={figure.avatar} />}
                >{figure.name}</Dropdown.Item>
              ))}
            </Dropdown.Section>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Card.Divider />
      <Card.Body>
        <Input
          bordered
          placeholder={`Escribe un mensaje para ${currentFigure.name}`}
          label="Mensaje"
          width="100%"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Spacer y={0.5} />
        <Textarea
          readOnly
          label={`Respuesta de ${currentFigure.name}`}
          width="100%"
          value={figureResponse}
        />
      </Card.Body>

      <Card.Footer>
        <Button
          size="sm"
          color="gradient"
          css={{ width: "100%" }}
          onPress={handleSend}
          disabled={isLoading}
        >
          Enviar
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default FigureTalk;
