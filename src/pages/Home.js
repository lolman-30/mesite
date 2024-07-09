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
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
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
      position="relative"
      overflow="hidden"
    >
      <Box style={backgroundImageStyle} />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="black"
        opacity="0.5"
        zIndex="1"
      />
      <VStack
        w={{ base: "full", md: "45%" }}
        spacing={6}
        align={"flex-start"}
        textAlign="left"
        pl="8"
        position="relative"
        zIndex="2"
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          color="white"
        >
          Perkenalkan saya Bagas
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          textAlign="justify"
          color="white"
        >
          "Saya adalah lulusan Teknik Informatika yang memiliki antusiasme mendalam terhadap dunia pengembangan web. Saya sangat bersemangat tentang teknologi informasi dan pemrograman. Aktivitas yang berhubungan dengan IT dan coding sangat memotivasi saya, dan saya memiliki rasa ingin tahu yang tak pernah padam. Saya sangat menikmati tantangan untuk mempelajari hal-hal baru dalam hidup saya, terutama yang berkaitan dengan dunia IT dan pemrograman."
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
              CV Saya
            </a>
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
