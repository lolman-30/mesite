import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Grid,
  GridItem,
  useBreakpointValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

const Contact = () => {
  const montserratFont = "Montserrat, sans-serif";

  // Menentukan layout grid responsif berdasarkan ukuran layar
  const gridColumns = useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" });

  // Animasi untuk elemen teks dan grid
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <MotionBox p={8} maxW="800px" mx="auto" initial="initial" animate="animate">
      <VStack spacing={6}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            px="6"
            py="3"
            width="100%"
            color={"gray.600"}
            fontWeight={"bold"}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })} // Responsif ukuran heading
          >
            Contact
          </Heading>
        </Stack>
        <Grid templateColumns={gridColumns} gap={6} w="full">
          {/** Animasi untuk Grid Item */}
          <MotionBox
            as={GridItem}
            mr={useBreakpointValue({ base: 0, md: 5 })}
            {...fadeIn}
          >
            <Text as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
              React Out Me
            </Text>
            <Text mb={4} textAlign="justify" fontFamily={montserratFont}>
              If you're interested in collaborating on exciting projects,
              innovative ideas, or exploring opportunities to bring your vision
              to life, feel free to reach out. Let’s work together to achieve
              your company’s goals and create something extraordinary.
            </Text>
          </MotionBox>

          <MotionBox
            as={GridItem}
            ml={useBreakpointValue({ base: 0, md: 5 })}
            {...fadeIn}
          >
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              Follow Me in Media Social
            </Text>
            <MotionHStack
              spacing={4}
              justify={useBreakpointValue({ base: "center", md: "start" })}
              {...fadeIn}
            >
              <Link href="https://github.com/lolman-30" target="_blank" mx="2">
                <FaGithub fontSize="30px" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bagas-dwi-pranata-526506294"
                target="_blank"
                mx="2"
              >
                <FaLinkedin fontSize="30px" />
              </Link>
              <Link
                href="https://www.instagram.com/bagasdpranata"
                target="_blank"
                mx="2"
              >
                <FaInstagram fontSize="30px" />
              </Link>
              <Link href="https://t.me/bagasdpranata" target="_blank" mx="2">
                <FaTelegram fontSize="30px" />
              </Link>
            </MotionHStack>
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              Email
            </Text>
            <HStack
              justify={useBreakpointValue({ base: "center", md: "start" })}
            >
              <Text fontFamily={montserratFont}>bagasdwipranata@gmail.com</Text>
            </HStack>
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              No. HP
            </Text>
            <HStack
              justify={useBreakpointValue({ base: "center", md: "start" })}
            >
              <Text fontFamily={montserratFont}>+62 895 6379 14508</Text>
            </HStack>
          </MotionBox>
        </Grid>
      </VStack>
    </MotionBox>
  );
};

export default Contact;
