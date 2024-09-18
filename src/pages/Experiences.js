import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Card = ({ heading, description }) => {
  return (
    <>
      <Box
        flex="1"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        w={useBreakpointValue({ base: "100%", md: "45%", lg: "30%" })} // Responsif lebar card
      >
        <Stack align={"start"} spacing={2}>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>

      <Modal isCentered>
        <ModalOverlay />
        <ModalContent maxW={useBreakpointValue({ base: "90vw", md: "50vw" })}>
          {" "}
          {/* Responsif ukuran modal */}
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ width: "100%", height: "50%", overflow: "hidden" }}>
              {description}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const App = () => {
  return (
    <div id="experiences">
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            px="6"
            py="3"
            color={"gray.600"}
            fontWeight={"bold"}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })} // Responsif ukuran heading
          >
            Pengalaman
          </Heading>
        </Stack>
        <Container maxW={"5xl"} mt={12}>
          <Flex
            flexWrap="wrap"
            gridGap={7}
            justify="center"
            align="start"
            direction={useBreakpointValue({ base: "column", md: "row" })} // Responsif layout Flex
          >
            <Card
              heading={
                "Frontend Engineering - Studi Independen Ruangguru Kampus Merdeka"
              }
              description={"Februari 2022 - Juli 2022"}
            />
            <Card
              heading={"Intensif Laravel Web Development - Sanbercode"}
              description={"Januari 2024 - Februari 2024"}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default App;
