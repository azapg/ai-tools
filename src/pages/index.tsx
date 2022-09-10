import { Button, Text, Spacer, Container, Grid } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Container css={{ padding: 0 }} sm>
      <Container css={{ padding: 0 }}>
        <Container sm direction="column" css={{ padding: 0 }}>
          <Text h1 css={{ lineHeight: "50px" }}>Herramientas de IA que ayudan a estudiantes y profesores.</Text>
          <Text color="$gray800">Exposición de herramientas e inteligencias artificiales que pueden ayudar en la educación.</Text>
        </Container>
        <Spacer y={0.5} />
        <Grid.Container lg>
          <Button size="sm" onPress={() => router.push("/herramientas")}>Ver herramientas</Button>
          <Spacer x={0.2} />
          <Button
            size="sm"
            bordered
            color="gradient"
            onPress={() => router.push("/genios")}
          >Revivir genios</Button>
        </Grid.Container>
      </Container>
    </Container >
  )
}

export default Home
