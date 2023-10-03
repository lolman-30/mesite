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
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
            onClick={handleClick}
          >
            Selengkapnya
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
                <Text>
                  Saya mengikuti program studi independen yang diselenggarakan
                  oleh Kampus Merdeka, dengan fokus pada Frontend Engineering.
                  Selama program ini, saya memperoleh pengetahuan dan
                  keterampilan berikut:
                </Text>
                <ol>
                  <li></li>
                  <li>1. Menerapkan proses software development;</li>
                  <li>2. Memahami System Development Life Cycle (SDLC);</li>
                  <li>3. Menggunakan software project management;</li>
                  <li>
                    4. Melakukan rapid software development dan software
                    testing;
                  </li>
                  <li>5. Mengembangkan software dengan VSCode;</li>
                  <li>6. Menjalankan program dengan terminal;</li>
                  <li>7. Menggunakan version control;</li>
                  <li>8. Menjalankan Basic Git commands;</li>
                  <li>9. Menyelesaikan konflik dengan Git;</li>
                  <li>10. Melakukan Merge Request pada GitHub/GitLab;</li>
                  <li>11. Melakukan review code dan menyelesaikannya;</li>
                  <li>12. Menerapkan metode project management;</li>
                  <li>13. Menggunakan tools project management;</li>
                  <li>
                    14. Menggunakan menggunakan HTML, CSS, Javascript, NPM/Yarn,
                    Typescript, Webpack, dan Algorithm Revisit;
                  </li>
                  <li>
                    15. Membuat website interaktif dengan HTML,
                    Typescript/Javascript dan melakukan styling dengan CSS dan
                    Preprocessor-nya;
                  </li>
                  <li>16. Menerapkan dasar-dasar pemrograman React;</li>
                  <li>17. Melakukan Component Programming dengan React;</li>
                  <li>18. Menggunakan Next.js Framework;</li>
                  <li>19. Menggunakan Chakra-UI;</li>
                  <li>20. Melakukan state management dengan Zustand;</li>
                  <li>21. Membuat API;</li>
                  <li>22. Menggunakan Postman;</li>
                  <li>23. Melakukan consume API.</li>
                </ol>
              </div>
            ) : (
              <Text>Konten.</Text>
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
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Pengalaman
          </Heading>
        </Stack>
        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={7} justify="center">
            <Card
              heading={"Frontend Engineering - Ruangguru Kampus Merdeka"}
              description={"Februari 2022 - Juli 2022"}
            />
            {/* <Card
            heading={"Pengalaman 2"}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            /> */}
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default App;
