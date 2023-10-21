import React from "react";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Card = ({ heading, description }) => {
  return (
    <Box flex="1" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Stack spacing={2}>
        <Heading size="md">{heading}</Heading>
        <Text mt={1} fontSize={"sm"}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

const App = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Pendidikan
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={7} justify="center">
          <Card
            heading={"Universitas Nusantara PGRI Kediri"}
            description={
              "Teknik Informatika Agustus 2019 - Agustus 2023 IPK : 3.58"
            }
          />
          <Card
            heading={"SMK PGRI 3 Nganjuk"}
            description={"Teknik Komputer dan Jaringan Bulan Tahun"}
          />
          <Card heading={"SMP Negeri 7 Nganjuk"} description={"Bulan Tahun"} />
          <Card
            heading={"SD Negeri Ganung Kidul 1 Nganjuk"}
            description={"Bulan Tahun"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default App;
