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

const Card = ({ heading, description, imageUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
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
