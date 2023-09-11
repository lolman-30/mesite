import React from "react";
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
  Icon,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
// import Gambar from "../assets/profile.jpg"

const Card = ({ heading, description, icon, href }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        flex="1"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"} onClick={onOpen}>
            Learn more
          </Button>
        </Stack>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW="90vw"> {/* Mengatur lebar modal */}
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
              <Image src="https://drive.google.com/file/d/1uLnxVa-i8lj4eI3PkzYt8iugDK5ReJiz/view?usp=sharing" alt="Deskripsi Gambar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Text>
              This is the content of the Learn More popup card. You can add other elements
              here as needed.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const App = () => {

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Sertifikat
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={7} justify="center">
          <Card
            heading={"Sapi 1"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Kucing 2"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Heading 3"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Heading 4"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default App;
