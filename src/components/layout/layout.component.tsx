import { Container, Spacer, Text } from "@nextui-org/react";
import Navigation from "../navigation/navigation.component";

function Layout(props: any) {
  return (
    <Container css={{ padding: 0, height: "100%", position: 'block' }}>
      <Navigation />
      <Container
        css={{ boxSizing: "border-box", px: "$6", mt: "$8", "@xsMax": { px: "$10" }, width: "100%" }}>
        {props.children}
      </Container>
      {/* footer */}
      <Container display="flex" justify="center" alignItems="center" css={{ position: 'relative', bottom:0}}>
        <Spacer y={2} />
        <Text small color="$gray800" css={{ textAlign: "center" }}>Hecho con 💖 por Allan Zapata. Instituto Rubiano, feria de tecnología.</Text>
        <Spacer y={2} />
      </Container>
    </Container>
  )
}

export default Layout;