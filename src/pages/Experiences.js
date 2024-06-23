import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

const renderPoints = (points) => {
  return points.map((point, index) => <li key={index}>{point}</li>);
};

const Card = ({ heading, date, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showImage, setShowImage] = useState(false);

  const handleExperienceClick = () => {
    setShowImage(true);
    onOpen();
  };

  return (
    <>
      <Box flex="1" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Stack align={"start"} spacing={2}>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {date}
            </Text>
          </Box>
          <Button
            size={"md"}
            variant="link"
            colorScheme={"blue"}
            fontWeight="semibold"
            onClick={handleExperienceClick}
            sx={{
              background: "none",
              textDecoration: "none",
              _hover: {
                background: "none",
              },
            }}
          >
            Detail
          </Button>
        </Stack>
      </Box>

      <Modal
        onClose={() => {
          setShowImage(false);
          onClose();
        }}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxW="50vw">
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showImage ? (
              <div style={{ width: "100%", height: "50%", overflow: "hidden" }}>
                {description}
              </div>
            ) : (
              <Text>
                This is the content of the Learn More popup card. You can add
                other elements here as needed.
              </Text>
            )}
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
            top="0"
            left="0"
            width="100%"
            color={"gray.600"}
            height="100px"
            align="center"
            fontWeight={"bold"}
            fontSize={"6xl"}
          >
            Experiences
          </Heading>
        </Stack>
        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={7} justify="center">
            <Card
              heading={"Frontend Engineering - Ruangguru Kampus Merdeka"}
              date={"Februari 2022 - Juli 2022"}
              description={
                <>
                  <Text>
                    Saya mengikuti program studi independen yang diselenggarakan
                    oleh SanberCode, dengan fokus pada Laravel Web Development.
                    Selama program ini, saya memperoleh pengetahuan dan
                    keterampilan berikut:
                  </Text>
                  <ol>
                    {renderPoints([
                      "Menerapkan proses software development dengan Laravel;",
                      "Memahami arsitektur MVC (Model-View-Controller);",
                      "Menggunakan ORM Eloquent untuk manajemen database;",
                      // Tambahkan poin lainnya di sini
                    ])}
                  </ol>
                </>
              }
            />
            <Card
              heading={"Laravel Web Development - SanberCode"}
              date={"Januari 2024 - Februari 2024"}
              description={
                <>
                  <Text>
                    Mengikuti kursus online mengenai Laravel Web Development di
                    platform SanberCode. Selama kursus ini, saya mempelajari:
                  </Text>
                  <ol>
                    {renderPoints([
                      "Fundamental Laravel seperti routing, controllers, dan Blade templating;",
                      "Membangun aplikasi web sederhana menggunakan Laravel;",
                      "Interaksi dengan database menggunakan Eloquent ORM;",
                      // Tambahkan poin lainnya di sini
                    ])}
                  </ol>
                </>
              }
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default App;
