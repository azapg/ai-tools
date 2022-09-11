import { Button, Card, Container, Input, Spacer, Textarea, Avatar, Text } from "@nextui-org/react";

type ToolData = {
  tool: {
    name: string,
    description: string,
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "gradient",
    icon?: string,
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
    isLoading?: boolean
  }
}

/**
 * @description - Basic component of a tool that a single string input and output
 */
function BasicToolTemplate({ toolData }: any) {
  const { tool, input, output, action } = toolData;
  const colorList = ["primary", "secondary", "success", "warning", "error", "gradient"];
  const headerColor = tool.color ?? colorList[Math.floor(Math.random() * colorList.length)];

  return (
    <Card
      variant="bordered"
      borderWeight="bold"
      css={{ mw: "350px", backgroundColor: "$black" }}>
      <Card.Header css={{ paddingTop: "8px", paddingBottom: "8px" }}>
        <Avatar color={headerColor} squared />
        <Spacer x={0.5} />
        <Text h4 css={{ marginBottom: 0 }}>{tool.name}</Text>
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
        <Button onPress={action.onClick} css={{ width: "100%" }} disabled={action.isLoading} >{action.text}</Button>
      </Card.Footer>
    </Card>
  )
}

export default BasicToolTemplate;