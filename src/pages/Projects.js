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
import Gambar1 from "../assets/gambar/image1.jpg";
import Gambar2 from "../assets/gambar/image2.jpg";
import Gambar3 from "../assets/gambar/image3.jpg";
import Gambar4 from "../assets/gambar/image4.jpg";
import Gambar5 from "../assets/gambar/image5.jpg";
import SectionMark from "../components/SectionMark";
import CornerFrame from "../components/CornerFrame";
import GitHubRepos from "../components/GitHubRepos";

const MotionBox = motion(Box);

const projects = [
  {
    title: "DIARY (Digital Library)",
    description:
      "Proyek akhir program Ruangguru Kampus Merdeka bersama tim 5 orang (3 frontend, 2 backend). Saya bertanggung jawab membangun landing page dan halaman admin.",
    image: Gambar1,
  },
  {
    title: "Employee Management System",
    description:
      "Aplikasi web untuk mengelola data karyawan — pendaftaran, pemantauan kinerja, hingga laporan dan evaluasi. Sebagai bagian tim proyek akhir Sanbercode, saya menangani perencanaan, analisis kebutuhan, pengembangan halaman karyawan, serta laporan dan evaluasi proyek.",
    image: Gambar2,
  },
  {
    title: "SPGB (Sistem Pakar Gaya Belajar)",
    description:
      "Proyek akhir / skripsi untuk menentukan gaya belajar siswa kelas 7 SMP. Klasifikasi gaya belajar dilakukan lalu hasilnya ditentukan menggunakan metode SVM (Support Vector Machine).",
    image: Gambar3,
  },
  {
    title: "Restaurant Web",
    description:
      "Proyek kelompok bertema pemesanan tempat makan sekaligus menu makanan. Bagian saya: halaman pengiriman, rating layanan, dan halaman admin.",
    image: Gambar4,
  },
  {
    title: "REST API — SAW",
    description:
      "Bagian saya dalam tugas kelompok membangun REST API untuk metode Simple Additive Weighting, dilanjutkan sebagai API mandiri setelah aplikasi mobile pasangan tidak rampung.",
    image: Gambar5,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Box w="full" px={{ base: 5, md: 16 }} py={{ base: 12, md: 16 }} maxW="1200px" mx="auto">
      <SectionMark tag="projects" title="Proyek yang pernah dikerjakan" />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
        {projects.map((project, index) => (
          <MotionBox
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
          >
            <CornerFrame active={selected === project.image}>
              <Box w="full" aspectRatio="16 / 9" overflow="hidden" bg="ink.800">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  objectPosition="top"
                  cursor="pointer"
                  loading="lazy"
                  onClick={() => setSelected(project.image)}
                  transition="transform 0.35s ease"
                  _hover={{ transform: "scale(1.04)" }}
                />
              </Box>
            </CornerFrame>
            <Text
              fontFamily="heading"
              fontSize="lg"
              fontWeight="600"
              color="slate.100"
              mt={4}
            >
              {project.title}
            </Text>
            <Text fontSize="sm" color="slate.400" mt={2} lineHeight="1.7">
              {project.description}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="ink.800" borderRadius="2px">
          <ModalCloseButton color="slate.100" />
          <ModalHeader fontFamily="mono" fontSize="sm" color="line.500">
            preview
          </ModalHeader>
          <ModalBody pb={6}>
            <Image src={selected} alt="Preview proyek" borderRadius="2px" w="full" />
          </ModalBody>
        </ModalContent>
      </Modal>

      <GitHubRepos />
    </Box>
  );
};

export default Projects;
