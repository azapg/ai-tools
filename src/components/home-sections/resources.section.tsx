import {Button, Container, Grid, Spacer, Text} from "@nextui-org/react";
import { useRouter } from "next/router";

function ResourcesSection() {
  const router = useRouter();

  return (<Container css={{padding: 0}}>
    <Container direction="column" css={{padding: 0}}>
      <Text h1 css={{lineHeight: "50px"}}>Recursos para aprender Inteligencia Artificial</Text>
      <Text color="$gray800">
        Para la exposición preparamos una lista de páginas webs, videos, ejemplos
        y otros materiales para aprender sobre inteligencia artificial o programación.
      </Text>
      <Text color="$gray800">
        También creamos un ensayo sobre la inteligencia artificial y su futuro, que es básicamente
        de lo que trata esta exposición, pero con más profundidad. Recomendamos leerlo si te interesa
        el tema.
      </Text>
    </Container>
    <Spacer y={1}/>
    <Grid.Container xl>
      <Button size="sm" onPress={() => router.push("/herramientas")}>Ver recursos</Button>
      <Spacer x={0.2}/>
      <Button size="sm" bordered color="gradient">Leer ensayo</Button>
    </Grid.Container>
  </Container>)
}
export default ResourcesSection;