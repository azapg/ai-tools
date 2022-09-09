import { Button, Card, Container, Input, Spacer, Textarea } from "@nextui-org/react";

type ToolData = {
  tool: {
    name: string,
    description: string,
  }
  input: {
    label: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void
  },
  output: {
    label: string,
    value: string
  },
  action: {
    text: string,
    onClick: () => void
  }
}

/**
 * @description - Basic component of a tool that a single string input and output
 */
function BasicToolTemplate({ toolData }: any) {
  const { tool, input, output, action } = toolData;

  return (
    <Card
      variant="bordered"
      borderWeight="bold"
      css={{ mw: "350px", backgroundColor: "$gray100", }}>
      <Card.Header css={{ paddingBottom: 0 }}>
        <h4>{tool.name}</h4>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ paddingTop: "10px" }}>
        <Container css={{ padding: 0 }}>
          <Input
            bordered
            label={input.label}
            placeholder={input.placeholder}
            width="100%"
            value={input.value}
            onChange={input.onChange}
          />
        </Container>
        <Spacer y={0.5} />
        <Textarea readOnly label={output.label} value={output.value} />
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Button onClick={action.onClick} css={{ width: "100%" }}>{action.text}</Button>
      </Card.Footer>
    </Card>
  )
}

export default BasicToolTemplate;