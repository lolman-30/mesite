import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionMark from "../components/SectionMark";

const MotionBox = motion(Box);

const experiences = [
  {
    role: "Frontend Engineering",
    org: "Studi Independen — Ruangguru Kampus Merdeka",
    period: "Feb 2022 — Jul 2022",
    description:
      "Menyelesaikan program studi independen berfokus pada pengembangan frontend, membangun fondasi untuk membaca kebutuhan antarmuka dan menerjemahkannya ke kode.",
  },
  {
    role: "Intensif Laravel Web Development",
    org: "Sanbercode",
    period: "Jan 2024 — Feb 2024",
    description:
      "Mendalami pengembangan backend dengan Laravel, dari struktur database hingga logika aplikasi, sebagai bekal membangun sistem yang lebih lengkap.",
  },
  {
    role: "Data Entry Operator",
    org: "PT Tata Bisnis Solusi",
    period: "Okt 2024 — Des 2024",
    description:
      "Kerja kontrak 3 bulan menangani pengelolaan data secara teliti dan efisien, melatih ketelitian bekerja dengan tenggat dan volume data yang padat.",
  },
];

const Experiences = () => {
  return (
    <Box w="full" px={{ base: 5, md: 16 }} py={{ base: 12, md: 16 }} maxW="900px" mx="auto">
      <SectionMark tag="experiences" title="Perjalanan singkat" />

      <VStack align="stretch" spacing={0} position="relative">
        <Box
          position="absolute"
          left={{ base: "5px", md: "5px" }}
          top="8px"
          bottom="8px"
          width="2px"
          bg="whiteAlpha.200"
        />
        {experiences.map((exp, i) => (
          <MotionBox
            key={exp.role}
            position="relative"
            pl={10}
            pb={i === experiences.length - 1 ? 0 : 10}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Box
              position="absolute"
              left="0"
              top="4px"
              w="12px"
              h="12px"
              borderRadius="full"
              bg="ink.900"
              border="2px solid"
              borderColor="signal.500"
            />
            <Text fontFamily="mono" fontSize="xs" color="line.500" mb={1}>
              {exp.period}
            </Text>
            <Text fontFamily="heading" fontSize={{ base: "lg", md: "xl" }} color="slate.100" fontWeight="600">
              {exp.role}
            </Text>
            <Text fontSize="sm" color="slate.400" mb={2}>
              {exp.org}
            </Text>
            <Text fontSize="sm" color="slate.300" lineHeight="1.7" maxW="560px">
              {exp.description}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Experiences;
