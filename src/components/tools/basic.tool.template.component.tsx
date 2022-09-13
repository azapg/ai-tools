import {Avatar, Button, Card, Container, Input, Loading, Spacer, Text, Textarea} from "@nextui-org/react";
import {useMemo} from "react";

type ToolData = {
  tool: {
    name: string,
    description: string,
    color?: any,
    icon?: string,
  }
  input: {
    label: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => any
  },
  output: {
    label: string,
    value: string
  },
  action: {
    text: string,
    onClick: () => any
    isLoading: boolean
  }
}

/**
 * @description - Basic component of a tool that a single string input and output
 */
function BasicToolTemplate(toolData: ToolData) {
  const {tool, input, output, action} = toolData;
  const headerColor = useMemo(() => {
    const colorList = ["primary", "secondary", "success", "warning", "error", "gradient"];
    return tool.color ?? colorList[Math.floor(Math.random() * colorList.length)]
  }, [tool.color]);

  return (
      <Card
          variant="bordered"
          borderWeight="bold"
          css={{mw: "350px", backgroundColor: "$black"}}>
        <Card.Header css={{paddingTop: "8px", paddingBottom: "8px"}}>
          <Avatar color={headerColor} squared/>
          <Spacer x={0.5}/>
          <Text h4 css={{marginBottom: 0}}>{tool.name}</Text>
        </Card.Header>
        <Card.Divider/>
        <Card.Body css={{paddingTop: "10px"}}>
          <Container css={{padding: 0}}>
            <Input
                bordered
                type="search"
                label={input.label}
                placeholder={input.placeholder}
                width="100%"
                value={input.value}
                onChange={input.onChange}
            />
          </Container>
          <Spacer y={0.5}/>
          <Textarea readOnly label={output.label} value={output.value} maxRows={6}/>
        </Card.Body>
        <Card.Divider/>
        <Card.Footer>
          <Button onPress={action.onClick} css={{width: "100%"}} disabled={action.isLoading}>
            { action.isLoading ? (
                <Loading type="points-opacity" color="currentColor" size="sm"/>
            ) : action.text }
          </Button>
        </Card.Footer>
      </Card>
  )
}

export default BasicToolTemplate;