import { Box, Flex, Container, Progress, Textarea, SimpleGrid } from "@chakra-ui/react";
import AirbnbCard from "../components/Card.jsx";
import { DarkModeSwitch } from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Progress value={80} size="md" colorScheme="pink" />
      <DarkModeSwitch />

      <Box align="center">
        <h1>
          Personal Projects
        </h1>
        <SimpleGrid>
          <AirbnbCard/>
          <AirbnbCard/>
          <AirbnbCard/>
        </SimpleGrid>
      </Box>

    </>
  );
}
