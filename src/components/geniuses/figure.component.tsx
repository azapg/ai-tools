import { Grid, Avatar, Spacer, Container, Text } from "@nextui-org/react";

const Figure = (props: {
  name: string;
  avatar: string;
  description: string;
  children?: any;
}) => {
  return (
    <Grid xs>
      <Avatar color="gradient" squared src={props.avatar} />
      <Spacer x={0.5} />
      <Container direction="column" css={{ padding: 0 }}>
        <Text h5 css={{ marginBottom: 0 }}>
          {props.name}
        </Text>
        <Text color="$gray800">{props.description}</Text>
      </Container>
    </Grid>
  );
};

export default Figure;