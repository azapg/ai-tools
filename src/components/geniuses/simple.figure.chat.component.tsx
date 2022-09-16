import {Avatar, Button, Card, Container, Dropdown, Input, Loading, Spacer, Textarea} from "@nextui-org/react";
import {useState} from "react";
import * as Geniuses from "../../lib/geniuses";
import dropdownItems from "./models";
import Figure from "./figure.component";
import ArrowDownIcon from "../icons/arrow.down.icon";

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
  const [helper, setHelper] = useState({
    text: "",
    color: "primary",
    active: false
  } as {
    text: string,
    color: any | undefined,
    active: boolean
  });

  const validate = () => {
    return input;
  }

  const figureList = dropdownItems.flatMap((section) => section.figures);


  const handleSend = async () => {
    if (input.length === 0) return;
    setIsLoading(true);
    const {response, error} = await Geniuses.select(currentFigure.key).ask(input);

    if(error) {
      setHelper({
        text: error,
        color: "error",
        active: true
      });
    }

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
      <Container css={{padding: 0, position: "relative"}}>
        <Card variant="bordered" css={{backgroundColor: "$black", position: "relative", maxWidth: "430px"}}>
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <Card.Header>
                <Figure {...currentFigure} />
                <ArrowDownIcon/>
              </Card.Header>
            </Dropdown.Trigger>
            <Dropdown.Menu
                aria-label={"geniuses menu"}
                onAction={(selected) => handleSelectFigure(selected as string)}
            >
              {dropdownItems.map((section) => (
                  <Dropdown.Section key={section.key} title={section.label}>
                    {section.figures.map((figure) => (
                        <Dropdown.Item
                            key={figure.key}
                            title={figure.name}
                            description={figure.description}
                            icon={<Avatar squared src={figure.avatar}/>}
                        >{figure.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Section>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Card.Divider/>
          <Card.Body>
            <Input
                bordered
                placeholder={`Escribe un mensaje para ${currentFigure.name}`}
                label="Mensaje"
                width="100%"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="search"
                helperText={helper.text}
                helperColor={helper.color}
            />
            <Spacer y={1}/>
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
                css={{width: "100%"}}
                onPress={() => {
                  if(!validate()) {
                    setHelper({
                      text: "Este campo no puede estar vacío",
                      color: "error",
                      active: true
                    });
                    return;
                  }

                  setHelper({
                    text: "",
                    color: "",
                    active: false
                  });
                  handleSend().then();
                }}
                disabled={isLoading}
            >
              { isLoading ? (
                  <Loading type="points-opacity" color="currentColor" size="sm"/>
              ) : "Enviar" }
            </Button>
          </Card.Footer>
        </Card>
      </Container>
  );
}

export default FigureTalk;