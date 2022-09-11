import { Container, Spacer, Grid, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

function HeroSection() {
  const router = useRouter();

  return (
    <Container css={{ padding: 0 }}>
      <Container direction="column" css={{ padding: 0 }}>
        <Text h1 css={{ lineHeight: "50px" }}>Inteligencias artificiales que ayudan a estudiantes y profesores.</Text>
        <Text color="$gray800">Exposición de herramientas e inteligencias artificiales que pueden ayudar en la educación.</Text>
      </Container>
      <Spacer y={0.5} />
      <Grid.Container xl>
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
  )
}

export default HeroSection;