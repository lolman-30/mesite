import React from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import Gambar from "../assets/profile.jpg"

const Projects = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Proyek
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex mb="20px">
          <Image src={Gambar} alt="Proyek Gambar" w={300} h={200} objectFit="cover" />
          <Box ml={6}>
            <Heading as="h2" size="lg" fontWeight="semibold">
              Judul Proyek
            </Heading>
            <Text mt={2} color="gray.600">
              Deskripsi proyek Anda akan ditulis di sini. Ini bisa berupa paragraf atau beberapa baris teks.
            </Text>
            <Text mt={4} color="blue.500" fontWeight="semibold">
              Selengkapnya
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px">
          <Image src={Gambar} alt="Proyek Gambar" w={300} h={200} objectFit="cover" />
          <Box ml={6}>
            <Heading as="h2" size="lg" fontWeight="semibold">
              Judul Proyek
            </Heading>
            <Text mt={2} color="gray.600">
              Deskripsi proyek Anda akan ditulis di sini. Ini bisa berupa paragraf atau beberapa baris teks.
            </Text>
            <Text mt={4} color="blue.500" fontWeight="semibold">
              Selengkapnya
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px">
          <Image src={Gambar} alt="Proyek Gambar" w={300} h={200} objectFit="cover" />
          <Box ml={6}>
            <Heading as="h2" size="lg" fontWeight="semibold">
              Judul Proyek
            </Heading>
            <Text mt={2} color="gray.600">
              Deskripsi proyek Anda akan ditulis di sini. Ini bisa berupa paragraf atau beberapa baris teks.
            </Text>
            <Text mt={4} color="blue.500" fontWeight="semibold">
              Selengkapnya
            </Text>
          </Box>
        </Flex>
        Show More.
      </Container>
    </Box>
  );
};

export default Projects;
