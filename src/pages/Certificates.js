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
import Gambar1 from "../assets/Sertifikat FE.PNG";
import Gambar3 from "../assets/Sertifikat Workshop Hima 2.PNG";

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
  // const [showMore, setShowMore] = useState(false);

  // const toggleShowMore = () => {
  //   setShowMore(!showMore);
  // };

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
              imageUrl={"URL_GAMBAR_2"}
            />
            <Card
              heading={
                "Sertifikat Workshop (How To Learn Web Programming Fundamental #1"
              }
              imageUrl={Gambar3}
            />
            {/* <Card heading={"Sertifikat 4"} imageUrl={"URL_GAMBAR_4"} /> */}
          </Flex>
        </Container>
      </Box>
    </div>
  );
};
// {showMore && (
//   <Flex flexWrap="wrap" gridGap={7} justify="center" mt={4}>
//     {/* Kartu-kartu tambahan akan ditampilkan di sini */}
//     <Card
//       heading={"Sertifikat 5"}
//       description={"-"}
//       imageUrl={"URL_GAMBAR_5"}
//     />
//     <Card
//       heading={"Sertifikat 6"}
//       description={"-"}
//       imageUrl={"URL_GAMBAR_6"}
//     />
//     <Card
//       heading={"Sertifikat 7"}
//       description={"-"}
//       imageUrl={"URL_GAMBAR_7"}
//     />
//     <Card
//       heading={"Sertifikat 8"}
//       description={"-"}
//       imageUrl={"URL_GAMBAR_8"}
//     />
//   </Flex>
// )}
// <Flex mt={4}>
//   <Button onClick={toggleShowMore}>
//     {showMore ? "Show More." : "Show More."}
//   </Button>
// </Flex>

export default App;
