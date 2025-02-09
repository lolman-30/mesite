import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import framer-motion
import Gambar1 from "../assets/gambar/image1.png";
import Gambar2 from "../assets/gambar/image2.png";
import Gambar3 from "../assets/gambar/image3.PNG";
import Gambar4 from "../assets/gambar/image4.PNG";
import Gambar5 from "../assets/gambar/image5.PNG";

const MotionBox = motion(Box); // Define motion version of Box

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const projects = [
    {
      title: "DIARY (Digital Library)",
      description:
        "This is our final project in Ruangguru Kampus Merdeka program. In a team of 5 people, we managed to create a complete website. Our team was divided into:  3 members are responsible for Frontend, 2 members are responsible for Backend. I was specifically responsible for creating the landing page and admin page.",
      image: Gambar1,
    },
    {
      title: "Employee Management System",
      description:
        "The purpose of this project is to build a web application to manage employee data in an organization, including registration, performance monitoring, and preparation of reports and evaluations. As a member of the Sanbercode final project team, I was responsible for planning, analyzing application needs, developing employee pages, and preparing project reports and evaluations.",
      image: Gambar2,
    },
    {
      title: "SPGB (Sistem Pakar Gaya Belajar)",
      description:
        "SPGB is my final project / thesis on determining learning styles in Grade 7 junior high school students, where the classification of student learning styles is carried out then the results are determined using the SVM (Support Vector Machine) method.",
      image: Gambar3,
    },
    {
      title: "Restaurant WEB",
      description:
        "Restaurant WEB is a group project. On this Web with the theme of ordering a place to eat along with ordering a menu of food that can be ordered. In this group assignment I got the part of making delivery, service rating, and admin pages.",
      image: Gambar4,
    },
    {
      title: "Rest API - SAW (Simple Additive Weighting)",
      description:
        "Rest API - SAW is my part in the group assignment for making my mobile application and my friend unfortunately could not complete the mobile application but the lecturer still tolerates the making of API-SAW.",
      image: Gambar5,
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <Box bg="gray.50" py={10} px={5} id="projects">
      <Container maxW="6xl">
        <Text fontSize="sm" color="gray.500" textTransform="uppercase">
          Work
        </Text>
        <Heading as="h1" mb={8} fontSize={{ base: "2xl", md: "4xl" }}>
          Recent Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start hidden and below
              animate={{ opacity: 1, y: 0 }} // Fade in and slide up
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger animation for each card
              }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              boxShadow="md"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.02)",
                transition: "0.3s",
              }} // Hover effect
            >
              <Flex direction="column" gap={4}>
                <Image
                  src={project.image}
                  alt={project.title}
                  borderRadius="lg"
                  objectFit="cover"
                  boxShadow="sm"
                  cursor="pointer" // Change cursor to pointer
                  onClick={() => handleImageClick(project.image)} // Handle image click
                />
                <Box p={4}>
                  <Flex alignItems="center" gap={2}>
                    <Heading as="h3" fontSize="xl" color="blue.600">
                      {project.title}
                    </Heading>
                  </Flex>
                  <Text
                    textAlign="justify"
                    fontSize="sm"
                    color="gray.800"
                    mt={2}
                    lineHeight="1.5"
                  >
                    {project.description}
                  </Text>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Modal for Image Popup */}
        <Modal isOpen={isOpen} onClose={closeModal} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Image Preview</ModalHeader>
            <ModalBody>
              <Image
                src={selectedImage}
                alt="Selected Project"
                borderRadius="md"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;
