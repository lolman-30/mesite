import React, { useState } from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Gambar1 from "../assets/Tugas Akhir.PNG";
import Gambar2 from "../assets/api-wisata.PNG";
import Gambar3 from "../assets/Diary.png";
import Gambar4 from "../assets/Aplikasi Skripsi.PNG";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Restoran WEB",
      description:
        "Restoran WEB merupakan tugas kelompok. Pada Web ini bertemakan pemesanan tempat makan beserta pemesanan menu makanan yang dapat dipesan. Pada tugas kelompok ini saya mendapat bagian membuat delivery, rating pelayanan, dan halaman admin.",
      image: Gambar1,
    },
    {
      title: "Rest API - SAW (Simple Additive Weighting)",
      description:
        "Rest API - SAW ini merupakan bagian saya dalam tugas kelompok pembuatan aplikasi mobile saya beserta teman saya sayangnya tidak bisa menyelesaikan aplikasi mobile tersebut akan tetapi dosen masih toleransi terhadap pembuatan API-SAW.",
      image: Gambar2,
    },
    {
      title: "DIARY (Digital Library)",
      description:
        "DIARY ini merupakan project akhir yang dibuat dari ruangguru kampus merdeka, kami membuat full website dengan 5 orang yaitu 3 Frontend dan 2 Backend. Saya mendapat bagian membuat landing page, dan halaman admin.",
      image: Gambar3,
    },
    {
      title: "SPGB (Sistem Pakar Gaya Belajar)",
      description:
        "SPGB merupakan tugas akhir/skripsi saya tentang penentuan gaya belajar pada siswa SMP Kelas 7, dimana dilakukan klasifikasi gaya belajar siswa kemudian hasilnya ditentukan menggunakan metode SVM (Support Vector Machine).",
      image: Gambar4,
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Project
        </Heading>
        {/* <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text> */}
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        {projects.map((project, index) => (
          <Flex mb="20px" key={index}>
            <Image
              src={project.image}
              alt={`Proyek ${index + 1} Gambar`}
              w={300}
              h={200}
              objectFit="cover"
              onClick={() => handleOpenModal(project)}
              cursor="pointer"
            />
            <Box ml={6}>
              <Heading as="h2" size="lg" fontWeight="semibold">
                {project.title}
              </Heading>
              <Text mt={2} color="gray.600">
                {project.description}
              </Text>
              <Text
                mt={4}
                color="blue.500"
                fontWeight="semibold"
                onClick={() => handleOpenModal(project)}
                cursor="pointer"
              >
                Selengkapnya
              </Text>
            </Box>
          </Flex>
        ))}

        {/* Modal untuk proyek */}
        <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
          <ModalOverlay />
          <ModalContent maxW="3xl">
            <ModalHeader>{selectedProject?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Isi modal */}
              <Image
                src={selectedProject?.image}
                alt={`${selectedProject?.title} Gambar`}
                w="100%"
                h={400}
                objectFit="cover"
              />
              <Text mt={4}>{selectedProject?.description}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;
