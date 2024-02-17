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
  Image,
} from "@chakra-ui/react";
import Gambar1 from "../assets/sertif/Sertifikat FE.PNG";
import Gambar2 from "../assets/sertif/SERTIFIKAT BAGAS DWI PRANATA-1.jpg";
import Gambar3 from "../assets/sertif/Sertifikat Workshop Hima 2.PNG";

const Card = ({ heading, description, imageUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showImage, setShowImage] = useState(false);

  const handleSertifikatkuClick = () => {
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
              {description}
            </Text>
          </Box>
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
            onClick={handleSertifikatkuClick}
          >
            Sertifikatku
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
                <Image
                  src={imageUrl}
                  alt="Deskripsi Gambar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="certificates">
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Sertifikat
          </Heading>
        </Stack>
        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={7} justify="center">
            <Card
              heading={"Sertifikat Front-End Engineering by Ruangguru"}
              imageUrl={Gambar1}
            />
            <Card
              heading={
                "Sertifikat Workshop (2 Hari Belajar Menuju Internasional"
              }
              imageUrl={Gambar2}
            />
            <Card
              heading={
                "Sertifikat Workshop (How To Learn Web Programming Fundamental #1"
              }
              imageUrl={Gambar3}
            />
            <Card
              heading={"Sertifikat Sololearn - HTML"}
              imageUrl={
                "https://api2.sololearn.com/v2/certificates/CT-HYZNLLES/image/png"
              }
            />
          </Flex>
          {showMore && (
            <Flex flexWrap="wrap" gridGap={7} justify="center" mt={4}>
              {/* Kartu-kartu tambahan akan ditampilkan di sini */}
              <Card
                heading={"Sertifikat Sololearn - CSS"}
                // description={"-"}
                imageUrl={
                  "https://api2.sololearn.com/v2/certificates/CT-93VSD8O0/image/png"
                }
              />
              <Card
                heading={"Sertifikat Sololearn - Javascript"}
                imageUrl={
                  "https://api2.sololearn.com/v2/certificates/CT-SAAMF27P/image/png"
                }
              />
              <Card
                heading={"Sertifikat Sololearn - Responsive Web Design"}
                imageUrl={
                  "https://api2.sololearn.com/v2/certificates/CT-DFELQHIZ/image/png"
                }
              />
              <Card
                heading={"Sertifikat Sololearn - React Redux"}
                imageUrl={
                  "https://api2.sololearn.com/v2/certificates/CT-6WWHGW0G/image/png"
                }
              />
            </Flex>
          )}
          <Flex mt={4}>
            <Button onClick={toggleShowMore}>
              {showMore ? "Show More." : "Show More."}
            </Button>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default App;
