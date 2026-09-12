import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfileImage from "../assets/003-removebg (1).png";
import CV from "../assets/CV Kerja.pdf";
import SectionMark from "../components/SectionMark";
import CornerFrame from "../components/CornerFrame";

const MotionBox = motion(Box);

const facts = [
  { label: "Lokasi", value: "Nganjuk, Jawa Timur" },
  { label: "Fokus", value: "Frontend & Laravel" },
  { label: "Pendidikan", value: "S1 Teknik Informatika" },
  { label: "Status", value: "Terbuka untuk kerja sama" },
];

const About = () => {
  return (
    <Box w="full" px={{ base: 5, md: 16 }} py={{ base: 12, md: 16 }} maxW="1200px" mx="auto">
      <SectionMark tag="about" title="Sedikit tentang saya" />

      <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 10, lg: 14 }}>
        <MotionBox
          flexShrink={0}
          w={{ base: "60%", sm: "45%", lg: "260px" }}
          alignSelf={{ base: "center", lg: "flex-start" }}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CornerFrame>
            <Box
              w="full"
              h={{ base: "220px", lg: "300px" }}
              bgImage={`url(${ProfileImage})`}
              bgSize="cover"
              bgPosition="center"
              bg="ink.800"
            />
          </CornerFrame>
          <Button
            as="a"
            href={CV}
            download
            mt={5}
            w="full"
            variant="outline"
            borderColor="line.500"
            color="slate.100"
            fontFamily="mono"
            fontSize="sm"
            borderRadius="2px"
            _hover={{ bg: "whiteAlpha.50" }}
          >
            Unduh CV
          </Button>
        </MotionBox>

        <VStack align="start" spacing={6} flex="1">
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text color="slate.300" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
              Saya lulusan Teknik Informatika dengan minat besar di pengembangan
              web dan teknologi informasi. Bagian yang paling saya nikmati
              adalah proses belajar hal baru — apalagi kalau berhubungan dengan
              IT dan pemrograman — dan selalu siap mengambil tantangan untuk
              terus berkembang.
            </Text>
            <Text color="slate.300" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" mt={4}>
              Pengalaman frontend saya terbentuk lewat program Studi
              Independen dan Bootcamp, ditambah 3 bulan kerja kontrak. Dari
              situ saya terbiasa membangun website yang responsif,
              ramah-pengguna, dan menyelesaikan pekerjaan secara efisien.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
            {facts.map((f) => (
              <Box
                key={f.label}
                borderLeft="2px solid"
                borderColor="line.500"
                pl={3}
              >
                <Text fontFamily="mono" fontSize="xs" color="slate.500">
                  {f.label}
                </Text>
                <Text fontSize="sm" color="slate.100">
                  {f.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <HStack spacing={6} pt={2} flexWrap="wrap">
            <HStack>
              <Icon as={FaPhoneAlt} color="line.500" />
              <Text fontSize="sm" color="slate.300">+62 895 6379 14508</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="line.500" />
              <Text fontSize="sm" color="slate.300">bagasdwipranata@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="line.500" />
              <Text fontSize="sm" color="slate.300">Nganjuk</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>

      <MotionBox
        mt={{ base: 12, md: 16 }}
        borderLeft="2px solid"
        borderColor="signal.500"
        pl={5}
        py={1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Text fontFamily="heading" fontStyle="italic" fontSize={{ base: "md", md: "lg" }} color="slate.200">
          "Creations that speak, inspiring creativity."
        </Text>
      </MotionBox>
    </Box>
  );
};

export default About;
