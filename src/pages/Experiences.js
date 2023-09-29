import React, { useState } from "react";
import {
  // Button,
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

const Card = ({ heading, description, imageUrl }) => {
  const { isOpen, onClose } = useDisclosure();
  const [showImage, setShowImage] = useState(false);

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
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Pengalaman
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={7} justify="center">
          <Card
            heading={"Frontend Engineering - Ruangguru Kampus Merdeka"}
            description={"Februari 2022 - Juli 2022"}
          />
          <Card
            heading={"Pengalaman 2"}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Pengalaman 3"}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Pengalaman 4"}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
};
// {showMore && (
//   <Flex flexWrap="wrap" gridGap={7} justify="center" mt={4}>
//     {/* Kartu-kartu tambahan akan ditampilkan di sini */}
//     <Card
//       heading={"Pengalaman 5"}
//       description={"-"}
//       imageUrl={"URL_GAMBAR_5"}
//     />
//   </Flex>
// )}
// <Flex mt={4}>
//   <Button onClick={toggleShowMore}>
//     {showMore ? "Show More." : "Show More."}
//   </Button>
// </Flex>

export default App;
