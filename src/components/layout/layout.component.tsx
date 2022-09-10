import { Container, Spacer, Text } from "@nextui-org/react";
import Navigation from "../navigation/navigation.component";

function Layout(props: any) {
  return (
    <div>
      <Navigation />
      <Container
        css={{ boxSizing: "border-box", px: "$6", mt: "$8", "@xsMax": { px: "$10" } }}>
        {props.children}
        {/* footer */}
        <Container display="flex" justify="center" alignItems="center">
          <Spacer y={2} />
          <Text small color="$gray800" css={{textAlign:"center"}}>Hecho con 💖 por Allan Zapata, para la feria de tecnología 16/09/2022</Text>
          <Spacer y={2} />
        </Container>
      </Container>
    </div>
  )
}

export default Layout;