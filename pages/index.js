import {
  Box,
  Flex,
  Container,
  Progress,
  Textarea,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import AirbnbCard from "../components/Card.jsx";
import { DarkModeSwitch } from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Progress value={80} size="md" colorScheme="pink" />
      <DarkModeSwitch />

      <Box align="center">
        <Heading>Personal Projects</Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px" justifyItems="center">
          <AirbnbCard />
          <AirbnbCard />
          <AirbnbCard />
          <AirbnbCard />
        </SimpleGrid>
      </Box>
    </>
  );
}
