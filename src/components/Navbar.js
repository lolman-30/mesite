import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Flex
      bg="gray.800"
      py="3"
      px="6"
      height="60px"
      align="center"
      color="white"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      boxShadow="md"
      zIndex="999"
    >
      <Flex align="center">
        <Link
          as={ReactRouterLink}
          to="/"
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          onClick={scrollToTop}
        >
          <Text fontSize="lg" className="cursor-pointer">
            Bagas Dwi Pranata
          </Text>
        </Link>
      </Flex>

      <Flex justify="right" flex="2">
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }} // Tambahkan style untuk margin kanan
        >
          <Text fontSize="lg">Proyek</Text>
        </ScrollLink>
        <ScrollLink
          to="experiences"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }} // Tambahkan style untuk margin kanan
        >
          <Text fontSize="lg">Pengalaman</Text>
        </ScrollLink>
        <ScrollLink
          to="certificates"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }} // Tambahkan style untuk margin kanan
        >
          <Text fontSize="lg">Sertifikat</Text>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }} // Tambahkan style untuk margin kanan
        >
          <Text fontSize="lg">Tentang</Text>
        </ScrollLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
