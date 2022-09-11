import { Container, Spacer, Grid, Button, Text, Card, Textarea, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import CardSlider from "../common/card.slider.component";
import Figure from "../geniuses/figure.component";

function TestCoso() {
  return (
      <Card css={{ maxWidth: "330px", backgroundColor: "$black", minWidth: "260px", w: "300px"}} variant="bordered">
        <Card.Header>
          <Figure name="Albert Einstein" description="Físico" avatar="https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png" />
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Input
              readOnly
              value="¿Qué me recomiendas para entender física?"
          />
          <Spacer y={0.5} />
          <Textarea
              readOnly
              value="Para entender la física, necesitas comprender las leyes que rigen el movimiento de los objetos. Estas leyes se pueden aprender a través de la matemática. Así que mi recomendación es que estudies matemáticas."
          />
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Button size="sm" css={{ width: "100%" }}>Generar otra explicación</Button>
        </Card.Footer>
      </Card>
  )
}

function GeniusesSection() {
  const router = useRouter();

  return (
      <Container css={{ padding: 0, }}>
        <Container direction="column" css={{ padding: 0 }}>
          <Text h1 css={{ lineHeight: "50px" }}>Habla con los más inteligentes de la historia</Text>
          <Text color="$gray800">
            Usando la inteligencia artificial generadora de texto GPT-3
            se pueden crear chat-bots que mantengan conversaciones como
            los mayores genios de la historia.</Text>
          <Spacer y={0.5} />
        </Container>

        <Spacer y={1} />
        <CardSlider
            cards={[<TestCoso key={0}/>, <TestCoso key={1}/>, <TestCoso key={2}/>]}
            initialIndex={1}
        />

        <Spacer y={1} />
        <Container css={{ padding: 0 }} display="flex" justify="center">
          <Text color="$gray800">
            La inteligencia artificial
            sabe toda su historia y bastante sobre las ciencias o
            disciplinas a las que se dedicaron, así que puedes preguntar
            sobre sus obras, pedir consejos, hablar sobre sus vidas o lo que quieras. 😉
          </Text>
          <Spacer y={1} />
          <Grid.Container xl>
            <Button size="sm" onPress={() => router.push("/genios")}>Ver genios</Button>
            <Spacer x={0.2} />
            <Button size="sm" bordered color="gradient">Saber más</Button>
          </Grid.Container>
        </Container>
      </Container >
  )
}

export default GeniusesSection;