import React, { useState } from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Gambar from "../assets/gambar/icon.png"; // Pastikan path ini benar

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [click, setClick] = useState(false);

  const montserratFont = "Montserrat, sans-serif";

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setClick(!click);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMobileMenu(false);
  };

  return (
    <>
      <Flex
        px="6"
        py="3"
        top="0"
        left="0"
        width="100%"
        zIndex="999"
        bg="gray.800"
        height="80px"
        color="white"
        align="center"
        boxShadow="md"
        className={`navbar ${showMobileMenu ? "mobile-menu-active" : ""}`}
      >
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <Flex align="center">
          <Box
            as={Link}
            to="/"
            _hover={{ textDecoration: "none" }}
            onClick={scrollToTop}
            ml="10"
          >
            <Image src={Gambar} alt="Logo" height="55px" />
          </Box>
        </Flex>

        <Flex
          className={`main-menu ${showMobileMenu ? "mobile-menu-open" : ""}`}
          justify="flex-end"
          flex="2"
          mr="10"
        >
          <Box
            as={Link}
            to="/project"
            _hover={{ textDecoration: "none" }}
            style={{ marginRight: "20px" }}
          >
            <Text fontSize={click ? "md" : "lg"} fontFamily={montserratFont}>
              Project
            </Text>
          </Box>
          <Box
            as={Link}
            to="/experience"
            _hover={{ textDecoration: "none" }}
            style={{ marginRight: "20px" }}
          >
            <Text fontSize={click ? "md" : "lg"} fontFamily={montserratFont}>
              Experience
            </Text>
          </Box>
          <Box
            as={Link}
            to="/certificate"
            _hover={{ textDecoration: "none" }}
            style={{ marginRight: "20px" }}
          >
            <Text fontSize={click ? "md" : "lg"} fontFamily={montserratFont}>
              Certificate
            </Text>
          </Box>
          <Box
            as={Link}
            to="/contact"
            _hover={{ textDecoration: "none" }}
            style={{ marginRight: "20px" }}
          >
            <Text fontSize={click ? "md" : "lg"} fontFamily={montserratFont}>
              Contact
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
