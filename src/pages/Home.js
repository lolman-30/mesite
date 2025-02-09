import React from "react";
import { Box, Flex, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../assets/003-removebg.png";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionHStack = motion(HStack);

const HeroSection = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      px={{ base: 4, md: 16 }}
      py={{ base: 8, md: 16 }}
      align="center"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
    >
      {/* Bagian Kiri - Teks */}
      <VStack
        align="flex-start"
        spacing={6}
        maxW={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          My Name
          <br />
          <Text as="span" color="red.500">
            <TypeAnimation
              sequence={["Bagas Dwi Pranata", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </Text>
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray.600"
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate Web Developer based in Indonesia.
        </Text>
        <MotionButton
          as="a" // Menjadikan tombol sebagai anchor tag
          // href="mailto:bagasdwipranata@gmail.com"
          target="_blank"
          size="lg"
          colorScheme="red"
          px={8}
          py={6}
          borderRadius={0}
          fontWeight="bold"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Let&apos;s talk with me
        </MotionButton>
        <MotionHStack
          spacing={4}
          mt={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <HStack spacing={2}>
            <FaWhatsapp color="green" />
            <Text>+62895637914508</Text>
          </HStack>
          <HStack spacing={2}>
            <FaEnvelope color="blue" />
            <Text>bagasdwipranata@gmail.com</Text>
          </HStack>
        </MotionHStack>
      </VStack>

      {/* Bagian Kanan - Gambar */}
      <MotionBox
        position="relative"
        w={{ base: "80%", md: "40%" }}
        h={{ base: "80%", md: "100%" }}
        right={20}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Box
          w="full"
          h="full"
          bgImage={`url(${ProfileImage})`}
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxShadow="2xl"
        />
      </MotionBox>
    </Flex>
  );
};

export default HeroSection;
