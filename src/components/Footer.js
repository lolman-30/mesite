import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";
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
          <Flex justify="center" fontSize="3xl" mt="2">
            <Link href="https://github.com/lolman-30" target="_blank" mx="2">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bagas-dwi-pranata-526506294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmRsMM7IiSMS4YIPr55BWCA%3D%3D
              "
              target="_blank"
              mx="2"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/bagasdpranata"
              target="_blank"
              mx="2"
            >
              <FaInstagram />
            </Link>
            <Link href="https://t.me/bagasdpranata" target="_blank" mx="2">
              <FaTelegram />
            </Link>
            <Link href="https://wa.me/+62895637914508" target="_blank" mx="2">
              <FaWhatsapp />
            </Link>
          </Flex>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
