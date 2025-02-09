import React from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  const montserratFont = "Montserrat, sans-serif";

  return (
    <Flex
      direction="column"
      width="250px"
      bg="gray.900"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      color="white"
      py="6"
      px="4"
      boxShadow="lg"
    >
      {/* Logo */}
      <Box mb="10" textAlign="center">
        <Text fontSize="2xl" fontFamily={montserratFont} fontWeight="bold">
          Bagas.
        </Text>
      </Box>
      {/* "Home", "About", "Services", "Works", "Blogs", "Contact" */}
      {/* Menu Items */}
      <Flex direction="column" align="flex-start" gap="4">
        {[
          "Home",
          "About",
          "Projects",
          "Experiences",
          "Certificates",
          "Contact",
        ].map((item, index) => (
          <Box
            key={index}
            as={Link}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Text fontSize="lg" fontFamily={montserratFont}>
              {item}
            </Text>
          </Box>
        ))}
      </Flex>

      {/* Social Icons */}
      <Flex mt="auto" justify="center" gap="4">
        <IconButton
          as="a"
          href="https://github.com/lolman-30"
          target="_blank"
          aria-label="Behance"
          icon={<FaGithub />}
          fontSize="xl"
          _hover={{ color: "gray.400" }}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/bagas-dwi-pranata-526506294"
          target="_blank"
          aria-label="Dribbble"
          icon={<FaLinkedin />}
          fontSize="xl"
          _hover={{ color: "gray.400" }}
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/bagasdpranata"
          target="_blank"
          aria-label="Instagram"
          icon={<FaInstagram />}
          fontSize="xl"
          _hover={{ color: "gray.400" }}
        />
      </Flex>

      {/* Footer */}
      <Box mt="6" textAlign="center">
        <Text fontSize="sm" color="gray.500">
          Bagas Dwi Pranata
        </Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
