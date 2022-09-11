import { Container, Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import GeniusesSection from "../components/home-sections/geniuses.section";
import HeroSection from "../components/home-sections/hero.section";
import ToolsSection from "../components/home-sections/tools.section";
import ResourcesSection from "../components/home-sections/resources.section";

const Home: NextPage = () => (
    <Container css={{ padding: 0 }} sm>
      <Spacer y={3} />
      <HeroSection />
      <Spacer y={9} />
      <ToolsSection />
      <Spacer y={9} />
      <GeniusesSection />
      <Spacer y={9} />
      <ResourcesSection />
    </Container>
);

export default Home;
