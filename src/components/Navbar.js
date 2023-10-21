import React, { useState } from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "../css/style.css";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [click] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowMobileMenu(false); // Tutup menu saat mengklik logo
  };

  return (
    <Flex
      className={`navbar ${showMobileMenu ? "mobile-menu-active" : ""}`}
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
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {/* Ikon hamburger di sini */}
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
      <Flex align="center">
        <Link
          as={ReactRouterLink}
          to="/"
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          onClick={scrollToTop}
        >
          <Text fontSize={click ? "md" : "lg"} className="cursor-pointer">
            Bagas Dwi Pranata
          </Text>
        </Link>
      </Flex>

      <Flex
        className={`main-menu ${showMobileMenu ? "mobile-menu-open" : ""}`}
        justify="right"
        flex="2"
      >
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }}
        >
          <Text fontSize={click ? "md" : "lg"}>Proyek</Text>
        </ScrollLink>
        <ScrollLink
          to="experiences"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }}
        >
          <Text fontSize={click ? "md" : "lg"}>Pengalaman</Text>
        </ScrollLink>
        <ScrollLink
          to="certificates"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }}
        >
          <Text fontSize={click ? "md" : "lg"}>Sertifikat</Text>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          _hover={{ textDecoration: "none" }}
          style={{ marginRight: "20px" }}
        >
          <Text fontSize={click ? "md" : "lg"}>Tentang</Text>
        </ScrollLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
