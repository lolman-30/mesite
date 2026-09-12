import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import SectionMark from "../components/SectionMark";

const MotionBox = motion(Box);

const socials = [
  { label: "GitHub", href: "https://github.com/lolman-30", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bagas-dwi-pranata-526506294",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bagasdpranata",
    icon: FaInstagram,
  },
  { label: "Telegram", href: "https://t.me/bagasdpranata", icon: FaTelegram },
];

const Contact = () => {
  return (
    <Box w="full" px={{ base: 5, md: 16 }} py={{ base: 12, md: 16 }} maxW="800px" mx="auto">
      <SectionMark tag="contact" title="Mari terhubung" />

      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Text color="slate.300" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" mb={10}>
          Tertarik berkolaborasi di proyek yang menarik, ide baru, atau
          sekadar ngobrol soal peluang kerja? Jangan ragu untuk menghubungi
          saya — mari kerjakan sesuatu yang bagus bersama.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} mb={10}>
        <VStack
          align="start"
          spacing={2}
          borderLeft="2px solid"
          borderColor="signal.500"
          pl={4}
        >
          <HStack color="slate.500" fontFamily="mono" fontSize="xs">
            <Icon as={FaEnvelope} />
            <Text>email</Text>
          </HStack>
          <Text
            as={Link}
            href="mailto:bagasdwipranata@gmail.com"
            fontSize="md"
            color="slate.100"
            _hover={{ color: "line.500" }}
          >
            bagasdwipranata@gmail.com
          </Text>
        </VStack>

        <VStack
          align="start"
          spacing={2}
          borderLeft="2px solid"
          borderColor="line.500"
          pl={4}
        >
          <HStack color="slate.500" fontFamily="mono" fontSize="xs">
            <Icon as={FaWhatsapp} />
            <Text>whatsapp</Text>
          </HStack>
          <Text
            as={Link}
            href="https://wa.me/62895637914508"
            target="_blank"
            fontSize="md"
            color="slate.100"
            _hover={{ color: "line.500" }}
          >
            +62 895 6379 14508
          </Text>
        </VStack>
      </SimpleGrid>

      <Text fontFamily="mono" fontSize="xs" color="slate.500" mb={4}>
        {"//"} temukan saya di media sosial
      </Text>
      <HStack spacing={5} flexWrap="wrap">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <HStack
              spacing={2}
              border="1px solid"
              borderColor="whiteAlpha.200"
              px={4}
              py={2}
              color="slate.300"
              _hover={{ color: "signal.500", borderColor: "signal.500" }}
              transition="all 0.2s ease"
            >
              <Icon as={s.icon} />
              <Text fontSize="sm">{s.label}</Text>
            </HStack>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Contact;
