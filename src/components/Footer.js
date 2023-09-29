import React from "react";
import {
  Box,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const montserratFont = "Montserrat, sans-serif";

  return (
    <Box>
      <Box bg="gray.800" color="white" py="4" textAlign="center">
        <Text fontFamily={montserratFont} mb="2">
          © 2023 Bagas Dwi Pranata.
          <Flex justify="center" fontSize="xl">
          <Link href="https://github.com/lolman-30" target="_blank" mx="2">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/your_username" target="_blank" mx="2">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com/your_username" target="_blank" mx="2">
            <FaInstagram />
          </Link>
          <Link href="https://t.me/your_username" target="_blank" mx="2">
            <FaTelegram />
          </Link>
          <Link href="https://wa.me/your_phonenumber" target="_blank" mx="2">
            <FaWhatsapp />
          </Link>
        </Flex>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
