import { Box, Progress, Textarea } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/Header.jsx";

export default function Contact() {
  return (
    <>
      <title>Contact</title>
      <Progress value={80} size="xs" colorScheme="pink" />
      <DarkModeSwitch />
    </>
  );
}
