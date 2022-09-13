import {Button, Card, Container, Grid, Input, Loading, Spacer, Text, Textarea} from "@nextui-org/react";
import {useRouter} from "next/router";
import CardSlider from "../common/card.slider.component";
import Figure from "../geniuses/figure.component";
import {showcaseData} from "../geniuses/models";
import { useState } from "react";

function GeniusShowcase(props: {
  name: string,
  description: string,
  avatar: string,
  input: string,
  output: string,
  action: (...params: any) => any
}) {
  const [isLoading, setLoading] = useState(false);

  return (
      <Card css={{maxWidth: "330px", backgroundColor: "$black", minWidth: "260px", w: "300px"}} variant="bordered">
        <Card.Header>
          <Figure name={props.name} description={props.description} avatar={props.avatar}/>
        </Card.Header>
        <Card.Divider/>
        <Card.Body>
          <Input
              readOnly
              value={props.input}
              aria-label="Ejemplo"
          />
          <Spacer y={0.5}/>
          <Textarea
              readOnly
              value={props.output}
              aria-label="Ejemplo"
          />
        </Card.Body>
        <Card.Divider/>
        <Card.Footer>
          <Button size="sm" css={{width: "100%"}} onPress={() => {
            setLoading(true);
            props.action().then(() => setLoading(false));
          }} disabled={isLoading}>
            { isLoading ? (
                <Loading type="points-opacity" color="currentColor" size="sm"/>
            ) : "Generar otra vez" }
          </Button>

        </Card.Footer>
      </Card>
  )
}

function GeniusesSection() {
  const router = useRouter();

  return (
      <Container css={{padding: 0,}}>
        <Container direction="column" css={{padding: 0}}>
          <Text h1 css={{lineHeight: "50px"}}>Habla con los más inteligentes de la historia</Text>
          <Text color="$gray800">
            Usando la inteligencia artificial generadora de texto GPT-3
            se pueden crear chat-bots que mantengan conversaciones como
            los mayores genios de la historia.</Text>
          <Spacer y={0.5}/>
        </Container>

        <Spacer y={1}/>
        <CardSlider
            cards={
              showcaseData.map((showcase) => (
                  <GeniusShowcase
                      key={showcase.name}
                      name={showcase.name}
                      description={showcase.description}
                      avatar={showcase.avatar}
                      input={showcase.input}
                      output={showcase.output}
                      action={() => ''}/>
              ))}
            initialIndex={1}
        />

        <Spacer y={1}/>
        <Container css={{padding: 0}} display="flex" justify="center">
          <Text color="$gray800">
            La inteligencia artificial
            sabe toda su historia y bastante sobre las ciencias o
            disciplinas a las que se dedicaron, así que puedes preguntar
            sobre sus obras, pedir consejos, hablar sobre sus vidas o lo que quieras. 😉
          </Text>
          <Spacer y={1}/>
          <Grid.Container xl>
            <Button size="sm" onPress={() => router.push("/genios")}>Ver genios</Button>
            <Spacer x={0.2}/>
            <Button size="sm" bordered color="gradient">Saber más</Button>
          </Grid.Container>
        </Container>
      </Container>
  )
}

export default GeniusesSection;