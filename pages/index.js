import {
  Box,
  Flex,
  Container,
  Progress,
  Textarea,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import AirbnbCard from "../components/Card.jsx";
import { DarkModeSwitch } from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Progress value={80} size="md" colorScheme="pink" />
      <DarkModeSwitch />

      {/* TODO: Add Hero - Hi I'm Tom... */}
      <Container>
        <Text>
          <Heading>Hi, I'm Tom!</Heading>
        </Text>
      </Container>

      {/* Personal Projects */}
      <Box align="center">
        <Heading>Personal Projects</Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px" justifyItems="center">
          <AirbnbCard />
          <AirbnbCard />
          <AirbnbCard />
          <AirbnbCard />
        </SimpleGrid>
      </Box>

      {/* Skill Showcase */}
      <Box align="center">
        <Heading>Skill Showcase</Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px" justifyItems="center">
          <AirbnbCard />
        </SimpleGrid>
      </Box>

      {/* TODO: Add Contact Form */}
    </>
  );
}
