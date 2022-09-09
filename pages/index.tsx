import { Button, Grid, Text, Spacer, Container, Card, Input, Textarea, Avatar } from '@nextui-org/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      {/* hero */}
      <Container>
        <Container direction="column" md css={{padding:0}}>
          <Text h1 css={{ lineHeight: "50px" }}>Herramientas de IA que ayudan a estudiantes y profesores.</Text>
          <Text color="$gray800">Exposición de herramientas e inteligencias artificiales que pueden ayudar en la educación.</Text>
        </Container>
        <Spacer y={0.5} />
        <Container lg>
          <NextLink href="herramientas"><Button size="sm">Ver herramientas</Button></NextLink>
          <Spacer y={0.2} />
          <NextLink href="genios"><Button size="sm" bordered color="gradient">Revivir genios</Button></NextLink>
        </Container>
      </Container>

      {/* tools sections */}
      <Container
        css={{
          padding: 0,
          height: "calc(84vh - 76px)"
        }}>
        <Text h2>Herramientas IA</Text>
        <Text color="$gray800">Estas son algunas herramientas que puedes probar para ayudarte en tus tareas, investigaciones, charlas y demás tareas escolares.</Text>
        <Spacer y={1} />
        <Text b>Ejemplo:</Text>
        <Spacer y={0.5} />
        <Card
          variant="bordered"
          borderWeight="bold"
          css={{ mw: "350px", backgroundColor: "$" }}>
          <Card.Header css={{ paddingBottom: 0 }}>
            <Container css={{ padding: 0 }} direction="column">
              <Text h5 css={{ margin: 0 }}>Puntos claves</Text>
              <Text color="$gray800" css={{ paddingBottom: "8px" }}>Muestra los puntos claves de un tema</Text>
            </Container>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <Input
              bordered
              label="Tema"
              value="Lípidos"
              width="100%"
              readOnly
            />
            <Spacer y={1} />
            <Textarea
              readOnly
              bordered
              label="Resultado (Generado por la IA)"
              value={`1. Son moléculas orgánicas que se encuentran en la membrana celular y en el plasma sanguíneo.\n\n 2. Son moléculas orgánicas que se encuentran en la membrana celular y en el plasma sanguíneo.\n\n 3. Son moléculas orgánicas que se encuentran en la membrana celular y en el plasma sanguíneo.`}
              width="100%"
            />
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <Button size="sm" color="primary" onClick={() => { }}>Probar herramienta</Button>
            <Spacer x={0.5} />
            <Button bordered size="sm" color="gradient" onClick={() => { }}>Todas las herramientas</Button>
          </Card.Footer>
        </Card>
      </Container>

      {/* Geniuses sections */}
      <Container
        css={{
          padding: 0,
          height: "calc(84vh - 76px)"
        }}>
        <Text h2>Revivir genios</Text>
        <Text color="$gray800">Estos son algunos genios que han ayudado a la humanidad a avanzar en el conocimiento.</Text>
        <Spacer y={1} />
        <Text b>Ejemplo:</Text>
        <Spacer y={0.5} />
        <Card
          variant="bordered"
          borderWeight="bold"
          css={{ mw: "350px", backgroundColor: "$" }}>
          <Card.Header css={{ paddingBottom: 0 }}>
            <Grid.Container css={{ padding: 0 }} gap={2}>
              <Grid>
                <Avatar squared src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png" />
              </Grid>
              <Grid>
                <Text h5 css={{ margin: 0 }}>Albert Einstein</Text>
                <Text color="$gray800" css={{ paddingBottom: "8px" }}>Físico alemán</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <Input
              bordered
              label="Pregunta"
              value="¿Qué es la relatividad?"
              width="100%"
              readOnly
            />
            <Spacer y={1} />
            <Textarea
              readOnly
              bordered
              label="Respuesta (Generada por la IA)"
              value={`La relatividad es una teoría física que describe la interacción entre la materia y la energía, y establece que la velocidad de la luz es la velocidad máxima que puede alcanzar la materia. La relatividad es una teoría física que describe la interacción entre la materia y la energía, y establece que la velocidad de la luz es la velocidad máxima que puede alcanzar la materia. La relatividad es una teoría física que describe la interacción entre la materia y la energía, y establece que la velocidad de la luz es la velocidad máxima que puede alcanzar la materia.`}
              width="100%"
            />
          </Card.Body>
        </Card>
      </Container>
    </Container >
  )
}

export default Home
