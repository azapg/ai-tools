import { Grid } from '@nextui-org/react'
import type { NextPage } from 'next'
import ExplainTopicTool from '../src/components/tools/explain.topic'
import GrammarCorrectionTool from '../src/components/tools/grammar.correction'

const Home: NextPage = () => {
  return (
    <div>
      <Grid.Container gap={2} justify="center">
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

export default Home
