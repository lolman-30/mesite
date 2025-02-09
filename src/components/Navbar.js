import React, { useState } from "react";
import { Flex, Text, Box, Image, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Gambar from "../assets/gambar/icon.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const montserratFont = "Montserrat, sans-serif";

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
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
        justify="space-between"
      >
        {/* Logo */}
        <Box
          as={Link}
          to="/"
          _hover={{ textDecoration: "none" }}
          onClick={scrollToTop}
        >
          <Image src={Gambar} alt="Logo" height="55px" />
        </Box>

        {/* Desktop Menu */}
        <Flex
          display={{ base: "none", md: "flex" }} // Hide on mobile
          justify="flex-end"
          align="center"
          flex="1"
          mr="10"
        >
          {["Beranda", "Proyek", "Pengalaman", "Sertifikat", "Kontak"].map(
            (item) => (
              <Box
                key={item}
                as={Link}
                to={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                _hover={{ textDecoration: "none" }}
                mx="4"
                onClick={scrollToTop}
              >
                <Text fontSize="lg" fontFamily={montserratFont}>
                  {item}
                </Text>
              </Box>
            )
          )}
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Toggle Menu"
          icon={showMobileMenu ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }} // Show on mobile
          onClick={toggleMobileMenu}
        />
      </Flex>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <Flex
          direction="column"
          bg="gray.800"
          py="4"
          position="absolute"
          top="80px"
          width="100%"
          zIndex="999"
          display={{ base: "flex", md: "none" }} // Show only on mobile
        >
          {["Beranda", "Proyek", "Pengalaman", "Sertifikat", "Kontak"].map(
            (item) => (
              <Box
                key={item}
                as={Link}
                to={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                _hover={{ textDecoration: "none" }}
                onClick={scrollToTop}
                py="2"
                textAlign="center"
              >
                <Text fontSize="lg" fontFamily={montserratFont} color="white">
                  {item}
                </Text>
              </Box>
            )
          )}
        </Flex>
      )}
    </>
  );
};

export default Navbar;
