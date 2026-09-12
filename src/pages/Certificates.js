import React, { useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Gambar1 from "../assets/sertif/Sertifikat FE_opt.jpg";
import Gambar2 from "../assets/sertif/Sertifikat Intensif_Laravel Web Development_opt.jpg";
import Gambar3 from "../assets/sertif/SERTIFIKAT BAGAS DWI PRANATA-1_opt.jpg";
import Gambar4 from "../assets/sertif/Sertifikat Workshop Hima 2_opt.jpg";
import SectionMark from "../components/SectionMark";
import CornerFrame from "../components/CornerFrame";

const MotionBox = motion(Box);

const certificates = [
  { heading: "Front-End Engineering", org: "Ruangguru", image: Gambar1 },
  {
    heading: "Intensif Laravel Web Development",
    org: "SanberCode",
    image: Gambar2,
  },
  {
    heading: "Workshop — 2 Hari Belajar Menuju Internasional",
    org: "Workshop",
    image: Gambar3,
  },
  {
    heading: "How To Learn Web Programming Fundamental #1",
    org: "Workshop Hima",
    image: Gambar4,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Box w="full" px={{ base: 5, md: 16 }} py={{ base: 12, md: 16 }} maxW="1200px" mx="auto">
      <SectionMark tag="certificates" title="Sertifikat & pelatihan" />

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {certificates.map((cert, index) => (
          <MotionBox
            key={cert.heading}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
          >
            <CornerFrame active={selected === cert.image}>
              <Box
                w="full"
                h="180px"
                overflow="hidden"
                bg="ink.800"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={cert.image}
                  alt={cert.heading}
                  w="full"
                  h="full"
                  objectFit="contain"
                  cursor="pointer"
                  loading="lazy"
                  onClick={() => setSelected(cert.image)}
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.03)" }}
                />
              </Box>
            </CornerFrame>
            <Text
              fontFamily="mono"
              fontSize="xs"
              color="line.500"
              mt={3}
            >
              {cert.org}
            </Text>
            <Text fontSize="sm" color="slate.200" mt={1} lineHeight="1.5">
              {cert.heading}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="ink.800" borderRadius="2px">
          <ModalCloseButton color="slate.100" />
          <ModalHeader fontFamily="mono" fontSize="sm" color="line.500">
            sertifikat
          </ModalHeader>
          <ModalBody pb={6}>
            <Image src={selected} alt="Sertifikat" borderRadius="2px" w="full" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Certificates;
