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
  height: "auto", // Mengatur tinggi secara otomatis
  minHeight: "100%", // Memberikan tinggi minimum 100% agar gambar menyesuaikan
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      minH={"100vh"} // Pastikan tinggi minimum konsisten
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
        w={{ base: "full", md: "45%" }} // Lebar teks responsif
        spacing={6}
        align={"flex-start"}
        textAlign="left"
        pl={useBreakpointValue({ base: 4, md: 8 })} // Padding teks responsif
        position="relative"
        zIndex="2"
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })} // Ukuran teks judul responsif
          color="white"
        >
          Perkenalkan saya Bagas
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "sm", md: "lg" })} // Ukuran teks deskripsi responsif
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
