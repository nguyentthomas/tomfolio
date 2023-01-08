import { Box, Progress, Textarea } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/Header.jsx";

export default function About() {
  return (
    <>
      <Progress value={80} size='xs' colorScheme='pink' />
      <DarkModeSwitch/>
    </>
  );
}
