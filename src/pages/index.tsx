import { Container, Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import GeniusesSection from "../components/home-sections/geniuses.section";
import HeroSection from "../components/home-sections/hero.section";
import ToolsSection from "../components/home-sections/tools.section";

const Home: NextPage = () => (
    <Container css={{ padding: 0 }} sm>
      <Spacer y={3} />
      <HeroSection />
      <Spacer y={16} />
      <ToolsSection />
      <Spacer y={16} />
      <GeniusesSection />
    </Container>
);

export default Home;
