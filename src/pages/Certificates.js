import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Gambar1 from "../assets/sertif/Sertifikat FE.PNG";
import Gambar2 from "../assets/sertif/Sertifikat Intensif_Laravel Web Development_Bagas Dwi Pranata.pdf";
import Gambar3 from "../assets/sertif/SERTIFIKAT BAGAS DWI PRANATA-1.jpg";
import Gambar4 from "../assets/sertif/Sertifikat Workshop Hima 2.PNG";

const Card = ({ heading, imageUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSertifikatkuClick = () => {
    onOpen();
  };

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
          </Box>
          <Button
            size={"md"}
            variant="link"
            colorScheme={"blue"}
            fontWeight="semibold"
            onClick={handleSertifikatkuClick}
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW={useBreakpointValue({ base: "90vw", md: "50vw" })}>
          {" "}
          {/* Responsif ukuran modal */}
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={imageUrl}
              alt="Deskripsi Gambar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const App = () => {
  return (
    <div id="certificates">
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            px="6"
            py="3"
            width="100%"
            color={"gray.600"}
            fontWeight={"bold"}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })} // Responsif ukuran heading
          >
            Sertifikat
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
              heading={"Sertifikat Front-End Engineering by Ruangguru"}
              imageUrl={Gambar1}
            />
            <Card
              heading={
                "Sertifikat Intensif Laravel Web Development by SanberCode"
              }
              imageUrl={Gambar2}
            />
            <Card
              heading={
                "Sertifikat Workshop (2 Hari Belajar Menuju Internasional)"
              }
              imageUrl={Gambar3}
            />
            <Card
              heading={
                "Sertifikat Workshop (How To Learn Web Programming Fundamental #1)"
              }
              imageUrl={Gambar4}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default App;
