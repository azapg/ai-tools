import { Grid, Text } from "@nextui-org/react";
import ExplainTopicTool from "../src/components/tools/explain.topic";
import GrammarCorrectionTool from "../src/components/tools/grammar.correction";

function ToolsPage() {
  return (
    <div>
      <Text h2>Herramientas que funcionan con inteligencia artificial</Text>
      <Grid.Container gap={3} justify="center">
        <Grid xs >
          <ExplainTopicTool />
        </Grid>
        <Grid xs >
          <GrammarCorrectionTool />
        </Grid>
        <Grid xs >
          <ExplainTopicTool />
        </Grid>
        <Grid xs >
          <GrammarCorrectionTool />
        </Grid>
        <Grid xs >
          <ExplainTopicTool />
        </Grid>
        <Grid xs >
          <GrammarCorrectionTool />
        </Grid>
        <Grid xs >
          <ExplainTopicTool />
        </Grid>
        <Grid xs >
          <GrammarCorrectionTool />
        </Grid>
        <Grid xs >
          <ExplainTopicTool />
        </Grid>
        <Grid xs >
          <GrammarCorrectionTool />
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default ToolsPage;