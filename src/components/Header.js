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
import CV from "../assets/CV Kerja.pdf";

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
          textAlign="justify" // Mengatur alignment teks
          color="white" // Warna teks
        >
          Saya adalah lulusan Teknik Informatika yang antusias mendalam dalam
          dunia pengembangan web. Saya sangat bersemangat terhadap teknologi
          informasi dan pemrograman. Kegiatan seputar IT dan koding merupakan
          energi bagi saya, dan rasa ingin tahu yang selalu membara. Saya sangat
          menikmati tantangan belajar hal-hal baru dalam kehidupan saya,
          terutama ketika itu berkaitan dengan dunia IT dan pemrograman.
        </Text>
        <Stack direction={"row"} spacing={4} justifyContent="flex-start">
          <Button
            bg={"blue.500"} // Warna tombol
            rounded={"full"}
            color={"white"} // Warna teks tombol
            _hover={{ bg: "blue.600" }}
          >
            <a href={CV} download>
              Download CV
            </a>
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
