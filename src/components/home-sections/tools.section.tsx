import {Avatar, Button, Card, Container, Grid, Spacer, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

function ToolShowcase(props: { name: string; description: string; icon: string; categories: string[] }) {
  return (
    <Card css={{padding: 0, backgroundColor: "$black", maxWidth: "20rem"}} variant="bordered">
      <Card.Header>
        <Avatar color="success" squared/>
        <Spacer x={0.5}/>
        <Container direction="column" css={{padding: 0}}>
          <Text h5 css={{marginBottom: 0}}>
            {props.name}
          </Text>
          <Text color="$gray800">{props.categories.join(", ")}</Text>
        </Container>
      </Card.Header>
      <Card.Divider/>
      <Card.Body css={{paddingBlock: "10px"}}>
        {props.description}
      </Card.Body>
      {/*<Card.Divider/>*/}
      <Card.Footer css={{paddingTop: 0}}>
        <Button css={{width: "100%"}}>Probar</Button>
      </Card.Footer>
    </Card>
  )
}

function ToolsSection() {
  const router = useRouter();

  return (
    <Container css={{padding: 0}}>
      <Container direction="column" css={{padding: 0}}>
        <Text h1 css={{lineHeight: "50px"}}>Herramientas increíbles</Text>
        <Text color="$gray800">Una colección de herramientas para ayudarte a aprender, hacer tareas o crear contenido
          educativo.</Text>
      </Container>
      <Spacer y={0.5}/>
      <Grid.Container xl>
        <Button size="sm" onPress={() => router.push("/herramientas")}>Ver herramientas</Button>
        <Spacer x={0.2}/>
        <Button size="sm" bordered color="gradient">Saber más</Button>
      </Grid.Container>
      <Spacer y={0.5}/>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6} md={4} lg={3}>
          <ToolShowcase
            name="Robot responde preguntas"
            categories={["Editar texto", "Español"]}
            description="Un robot con todo el conocimiento de internet respondiendo CUALQUIER pregunta que le hagas :)"
            icon="no"
          />
          </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <ToolShowcase
            name="Explicación sencilla"
            categories={["Generar texto", "Aprender"]}
            description="Generar una explicación sencilla, con ejemplos y analogías de un tema."
            icon="no"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <ToolShowcase
            name="Generar preguntas"
            categories={["Generar texto", "Profesores"]}
            description="Generar preguntas sobre un tema específico puede servir a profesores para generar preguntas interesantes en sus ejercicios."
            icon="no"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default ToolsSection;