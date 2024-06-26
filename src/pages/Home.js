"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Bagas from "../assets/bagas.jpg";
import CV from "../assets/CV Kerja.pdf";

const backgroundImageStyle = {
  backgroundImage: `url(${Bagas})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
  zIndex: 1,
};

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      color="white"
      boxShadow="lg"
      style={backgroundImageStyle}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="black"
        opacity="0.5"
        zIndex="2"
      />
      <VStack
        w={{ base: "full", md: "45%" }}
        spacing={6}
        align={"flex-start"}
        textAlign="left"
        pl="8"
        position="relative"
        zIndex="3"
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          color="white"
        >
          My Introduction is Bagas
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          textAlign="justify"
          color="white"
        >
          "I am a graduate in Computer Engineering who has a deep enthusiasm for
          the world of web development. I am highly passionate about information
          technology and programming. Activities related to IT and coding are
          energizing for me, and I have a constant burning curiosity. I
          thoroughly enjoy the challenge of learning new things in my life,
          especially when it comes to the IT and programming world."
        </Text>
        <Stack direction={"row"} spacing={4} justifyContent="flex-start">
          <Button
            bg={"red.500"}
            borderRadius={"0"}
            color={"white"}
            _hover={{ bg: "red.600" }}
          >
            <a
              href={CV}
              download
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Curriculum Vitae
            </a>
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
