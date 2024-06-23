import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  Image,
  Modal,
  Heading,
  Container,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import Gambar1 from "../assets/gambar/image1.png";
import Gambar2 from "../assets/gambar/image2.png";
import Gambar3 from "../assets/gambar/image3.PNG";
import Gambar4 from "../assets/gambar/image4.PNG";
import Gambar5 from "../assets/gambar/image5.PNG";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const montserratFont = "Montserrat, sans-serif";

  const projects = [
    {
      title: "DIARY (Digital Library)",
      description: `
        Ini adalah proyek akhir yang kami kerjakan di program Ruangguru Kampus Merdeka. Dalam tim yang terdiri dari 5 orang, kami berhasil membuat sebuah website lengkap. Tim kami terbagi menjadi:
    
        - 3 anggota bertanggung jawab untuk Frontend
        - 2 anggota bertanggung jawab untuk Backend
    
        Saya secara khusus bertanggung jawab untuk membuat landing page dan halaman admin.
      `,
      image: Gambar1,
    },
    {
      title: "Sistem Manajemen Karyawan",
      description: `Tujuan proyek ini adalah membangun aplikasi web untuk mengelola data karyawan dalam suatu organisasi, mencakup pendaftaran, pemantauan kinerja, serta penyusunan laporan dan evaluasi. Sebagai anggota tim proyek akhir Sanbercode, saya bertanggung jawab atas perencanaan, analisis kebutuhan aplikasi, pengembangan halaman karyawan, dan penyusunan laporan serta evaluasi proyek.`,
      image: Gambar2,
    },
    {
      title: "SPGB (Sistem Pakar Gaya Belajar)",
      description:
        "SPGB merupakan tugas akhir/skripsi saya tentang penentuan gaya belajar pada siswa SMP Kelas 7, dimana dilakukan klasifikasi gaya belajar siswa kemudian hasilnya ditentukan menggunakan metode SVM (Support Vector Machine).",
      image: Gambar3,
    },
    {
      title: "Website Restoran",
      description:
        "Restoran WEB merupakan tugas kelompok. Pada Web ini bertemakan pemesanan tempat makan beserta pemesanan menu makanan yang dapat dipesan. Pada tugas kelompok ini saya mendapat bagian membuat delivery, rating pelayanan, dan halaman admin.",
      image: Gambar4,
    },
    {
      title: "Rest API - SAW (Simple Additive Weighting)",
      description:
        "Rest API - SAW ini merupakan bagian saya dalam tugas kelompok pembuatan aplikasi mobile saya beserta teman saya sayangnya tidak bisa menyelesaikan aplikasi mobile tersebut akan tetapi dosen masih toleransi terhadap pembuatan API-SAW.",
      image: Gambar5,
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
    <div id="projects">
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            px="6"
            py="3"
            top="0"
            left="0"
            width="100%"
            color={"gray.600"}
            height="100px"
            align="center"
            fontWeight={"bold"}
            fontSize={"6xl"}
          >
            Projects
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          {projects.map((project, index) => (
            <Flex mb="20px" key={index}>
              <Image
                h={200}
                w={400}
                cursor="pointer"
                objectFit="cover"
                src={project.image}
                alt={`Proyek ${index + 1} Gambar`}
                onClick={() => handleOpenModal(project)}
              />
              <Box ml={6}>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="semibold"
                  fontFamily={montserratFont}
                >
                  {project.title}
                </Heading>
                <Text
                  mt={2}
                  color="black.200"
                  textAlign="justify"
                  fontFamily={montserratFont}
                >
                  {project.description}
                </Text>
                <Text
                  size={"md"}
                  color={"blue.600"}
                  cursor={"pointer"}
                  fontWeight="semibold"
                  sx={{ textDecoration: "none" }}
                  onClick={() => handleOpenModal(project)}
                >
                  Detail
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
                  h={400}
                  w="100%"
                  objectFit="cover"
                  src={selectedProject?.image}
                  alt={`${selectedProject?.title} Gambar`}
                />
                {/* <Text mt={4}>{selectedProject?.description}</Text> */}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      </Box>
    </div>
  );
};

export default Projects;
