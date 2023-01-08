import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex top="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button variant="ghost" aria-label="about" my={5} w="100%">
              About
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button variant="ghost" aria-label="blog" my={5} w="100%">
              Blog
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />

        {/* Mobile Content */}
        <Flex
          w="100vw"
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          z-index={20}
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </NextLink>

            <NextLink href="/about" passHref>
              <Button variant="ghost" aria-label="About" my={5} w="100%">
                About
              </Button>
            </NextLink>

            <NextLink href="/contact" passHref>
              <Button variant="ghost" aria-label="Contact" my={5} w="100%">
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>
    </Flex>
  );
};
