import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfileImage from "../assets/003-removebg.png";
import CornerFrame from "../components/CornerFrame";

const MotionBox = motion(Box);
const MotionHeading = motion(Text);
const MotionHStack = motion(HStack);

const NAME = "Bagas Dwi Pranata";

const Home = () => {
  return (
    <Flex
      w="100%"
      minH={{ base: "auto", md: "calc(100vh - 72px)" }}
      px={{ base: 5, md: 16 }}
      py={{ base: 12, md: 16 }}
      align="center"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 12, md: 8 }}
      maxW="1200px"
      mx="auto"
    >
      {/* Left — text */}
      <VStack
        align="flex-start"
        spacing={5}
        maxW={{ base: "100%", md: "52%" }}
        textAlign="left"
      >
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HStack spacing={2} color="line.500" fontFamily="mono">
            <Text fontSize="sm">{"//"}</Text>
            <Text fontSize="sm">hai, perkenalkan saya</Text>
          </HStack>
        </MotionBox>

        {/* Signature moment: the name is drafted onto the page,
            like a line being drawn on a blueprint. */}
        <Box position="relative" lineHeight="1.05">
          <MotionHeading
            as="h1"
            fontFamily="heading"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="700"
            color="slate.100"
            letterSpacing="-0.02em"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          >
            {NAME}
          </MotionHeading>
          <MotionBox
            height="3px"
            bg="signal.500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            mt={2}
          />
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Text
            fontFamily="mono"
            fontSize={{ base: "md", md: "lg" }}
            color="line.500"
          >
            Web Developer — Frontend &amp; Laravel
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="slate.300"
            mt={3}
            maxW="480px"
          >
            Lulusan Teknik Informatika yang senang merapikan ide jadi
            antarmuka yang jelas dan enak dipakai. Berbasis di Nganjuk, Jawa
            Timur.
          </Text>
        </MotionBox>

        <MotionHStack
          spacing={4}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            bg="signal.500"
            color="ink.950"
            fontFamily="mono"
            fontWeight="600"
            borderRadius="2px"
            rightIcon={<FaArrowRight />}
            _hover={{ bg: "signal.400" }}
          >
            Hubungi Saya
          </Button>
          <Button
            as={RouterLink}
            to="/about"
            size="lg"
            variant="outline"
            borderColor="line.500"
            color="slate.100"
            fontFamily="mono"
            borderRadius="2px"
            _hover={{ bg: "whiteAlpha.50" }}
          >
            Tentang Saya
          </Button>
        </MotionHStack>

        <MotionHStack
          spacing={6}
          pt={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <HStack spacing={2}>
            <FaWhatsapp color="#25D366" />
            <Text
              as={ChakraLink}
              href="https://wa.me/62895637914508"
              target="_blank"
              fontSize="sm"
              color="slate.300"
              _hover={{ color: "signal.500" }}
            >
              +62 895 6379 14508
            </Text>
          </HStack>
          <HStack spacing={2}>
            <FaEnvelope color="#4FA8D8" />
            <Text
              as={ChakraLink}
              href="mailto:bagasdwipranata@gmail.com"
              fontSize="sm"
              color="slate.300"
              _hover={{ color: "signal.500" }}
            >
              bagasdwipranata@gmail.com
            </Text>
          </HStack>
        </MotionHStack>
      </VStack>

      {/* Right — photo */}
      <MotionBox
        w={{ base: "70%", md: "38%" }}
        maxW="380px"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <CornerFrame>
          <Box
            w="full"
            h={{ base: "260px", md: "420px" }}
            bgImage={`url(${ProfileImage})`}
            bgSize="cover"
            bgPosition="center top"
            bg="ink.800"
          />
        </CornerFrame>
      </MotionBox>
    </Flex>
  );
};

export default Home;
