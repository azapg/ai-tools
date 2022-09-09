import type {NextPage} from 'next'
import ExplainTopicTool from '../src/components/tools/explain.topic'

const Home: NextPage = () => {
  return (
    <div>
      <h2>Título de ejemplo</h2>
      <p>Descripción de ejemplo</p>
      <ExplainTopicTool />
    </div>
  )
}

export default Home
