import { Container, Grid, Text } from "@nextui-org/react";
import ExplainTopicTool from "../components/tools/explain.topic";
import GrammarCorrectionTool from "../components/tools/grammar.correction";

function ToolsPage() {
  return (
    <Container css={{padding:0}}>
      <Text h1 css={{margin:0}}>Herramientas IA</Text>
      <Text color="$gray800">Esta es una lista de herramientas que puedes usar para trabajos académicos. Puedes preguntar a los miembros de la exposición si tienes dudas.</Text>
      <Grid.Container gap={2}>
        <Grid xs>
          <ExplainTopicTool />
        </Grid>
        <Grid xs>
          <GrammarCorrectionTool />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default ToolsPage;