"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Bagas from "../assets/bagas.jpg";
import CV from "../assets/CV Kerja.pdf"; // Pastikan CV Kerja.pdf sudah benar-benar terhubung ke file yang tepat

const backgroundImageStyle = {
  backgroundImage: `url(${Bagas})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"flex-start"} // Mengubah ke kiri agar elemen-elemen ada di sebelah kiri
      px={useBreakpointValue({ base: 4, md: 8 })}
      color="white" // Warna teks
      boxShadow="lg" // Efek bayangan
      style={backgroundImageStyle} // Mengatur gambar latar belakang
    >
      <VStack
        w={{ base: "full", md: "45%" }}
        spacing={6}
        align={"flex-start"}
        textAlign="left"
        pl="8"
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          color="white" // Warna teks
        >
          Perkenalkan saya Bagas
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          textAlign="left" // Mengatur alignment teks
          color="white" // Warna teks
        >
          Saya freshgraduate lulusan teknik informatika, yang suka dalam dunia
          pemrograman web
        </Text>
        <Stack direction={"row"} spacing={4} justifyContent="flex-start">
          <Button
            bg={"blue.500"} // Warna tombol
            rounded={"full"}
            color={"white"} // Warna teks tombol
            _hover={{ bg: "blue.600" }}
            href={CV} // Pastikan URL CV Kerja.pdf sudah benar
            download // Ini akan memberikan pilihan untuk mengunduh file
          >
            Download CV
          </Button>
          <Button
            bg={"blue.500"} // Warna tombol
            rounded={"full"}
            color={"white"} // Warna teks tombol
            _hover={{ bg: "blue.600" }} // Efek hover yang lebih menarik
          >
            Contact Me
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
