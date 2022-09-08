import {Container} from "@nextui-org/react";
import Navigation from "../navigation/navigation.component";

function Layout(props: any) {
  return (
    <div>
      <Navigation/>
      <Container
        css={{boxSizing: "border-box", px: "$6", mt: "$8", "@xsMax": {px: "$10"}}}>
        {props.children}
      </Container>
    </div>
  )
}

export default Layout;