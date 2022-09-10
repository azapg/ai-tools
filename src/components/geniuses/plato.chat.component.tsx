import { Avatar, Button, Card, Container, Input, Spacer, Text, Textarea } from "@nextui-org/react";

const AVATAR_URL = "https://www.worldhistory.org/img/r/p/500x600/1165.jpg?v=1655239682";

function PlatoChat() {
  return (
    <Card variant="bordered" css={{backgroundColor: "$black"}}>
      <Card.Header>
        <Avatar color="gradient" squared src={AVATAR_URL} />
        <Spacer x={0.5} />
        <Container direction="column" css={{ padding: 0 }}>
          <Text h5 css={{ marginBottom: 0 }}>Platón</Text>
          <Text color="$gray800">Filósofo griego</Text>
        </Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Input
          bordered
          placeholder="Escribe un mensaje para Platón"
          label="Mensaje"
          width="100%"
        />
        <Spacer y={0.5} />
        <Textarea
          readOnly
          label="Respuesta de Platón"
        />
      </Card.Body>
      {/* <Card.Divider /> */}
      <Card.Footer>
        <Button size="sm" color="gradient" css={{width:"100%"}}>Enviar</Button>
      </Card.Footer>
    </Card>
  )
}

export default PlatoChat;