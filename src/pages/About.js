"use client";

import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Divider,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfileImage from "../assets/003-removebg (1).png";
import CV from "../assets/CV Kerja.pdf";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function About() {
  return (
    <Box w="full" minH="100vh" bg="white" px={6} py={10}>
      {/* Header */}
      <MotionVStack
        spacing={2}
        textAlign="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Text fontSize="lg" fontWeight="medium">
          Nice to meet you!
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          WELCOME TO...
        </Text>
      </MotionVStack>

      {/* Content */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        mt={8}
        align="center"
        justify="center"
      >
        <MotionBox
          position="relative"
          w={{ base: "80%", md: "40%" }}
          h={{ base: "80%", md: "100%" }}
          // right={5}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Text Below Image */}
          <MotionVStack
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            w={{ base: "full", md: "100%" }}
            spacing={4}
            textAlign={{ base: "center" }}
          >
            <Image
              src={ProfileImage}
              alt="Profile"
              borderRadius="full"
              boxSize="200px"
              boxShadow="lg"
            />
            <Text fontSize="2xl" fontWeight="bold" color="red.500">
              Bagas Dwi Pranata
            </Text>
            <Text fontSize="lg" color="gray.600">
              Passionate Web Developer from Indonesia
            </Text>
            <Button
              colorScheme="blue"
              size="md"
              variant="solid"
              px={6}
              borderRadius="full"
            >
              <a
                href={CV}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download CV
              </a>
            </Button>
          </MotionVStack>
        </MotionBox>
        {/* Left Section */}

        {/* Right Section */}
        <MotionVStack
          w={{ base: "full", md: "70%" }}
          spacing={6}
          align="start"
          bg="gray.100"
          p={6}
          borderRadius="lg"
          boxShadow="md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {/* Contact Info */}
          <HStack spacing={6}>
            <HStack>
              <Icon as={FaPhoneAlt} color="blue.400" />
              <Text>+62895637914508</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="blue.400" />
              <Text>bagasdwipranata@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="blue.400" />
              <Text>Nganjuk</Text>
            </HStack>
          </HStack>
          <Divider />

          {/* Description */}
          <Text color="gray.800" fontSize="md" textAlign="justify">
            I am a graduate of Computer Engineering with a strong passion for
            web development and information technology. I enjoy learning new
            things, especially in the IT and programming fields, and am always
            ready to take on challenges to continue growing.
          </Text>

          <Text color="gray.800" fontSize="md" textAlign="justify">
            With experience in frontend web development through Independent
            Study programs and a Bootcamp, as well as 3 months of contract work,
            I have developed strong skills in creating responsive, user-friendly
            websites and efficiently completing tasks.
          </Text>
        </MotionVStack>
      </Stack>

      {/* Quote */}
      <MotionBox
        mt={8}
        bg="gray.800"
        p={6}
        borderRadius="lg"
        textAlign="center"
        color="white"
        maxW="800px"
        mx="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <Text fontStyle="italic" fontSize="lg">
          "Creations That Speak, Inspiring Creativity"
        </Text>
      </MotionBox>
    </Box>
  );
}
