import {Container, Grid, Text} from "@nextui-org/react";
import ExplainTopicTool from "../components/tools/explain.topic";
import GrammarCorrectionTool from "../components/tools/grammar.correction";
import ExamnQuestionsTool from "../components/tools/examn.questions";
import KeyPointsTool from "../components/tools/key.points";
import AnsweringBotTool from "../components/tools/answering.bot";

const ToolList = [
  <ExplainTopicTool key={0}/>,
  <GrammarCorrectionTool key={1}/>,
  <ExamnQuestionsTool key={2}/>,
  <KeyPointsTool key={3}/>,
  <AnsweringBotTool key={4}/>,
];

function ToolsPage() {
  return (
      <Container css={{padding: 0}}>
        <Text h1 css={{margin: 0}}>Herramientas IA</Text>
        <Text color="$gray800">Esta es una lista de herramientas que puedes usar para trabajos académicos. Puedes
          preguntar a los miembros de la exposición si tienes dudas.</Text>
        <Grid.Container gap={2}>
          {
            ToolList.map((tool, index) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={index} id={"tool-" + index}>
                  {tool}
                </Grid>
            ))
          }
        </Grid.Container>
      </Container>
  )
}

export default ToolsPage;