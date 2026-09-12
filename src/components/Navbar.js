import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Text, VStack, Icon } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { label: "Beranda", shortLabel: "Beranda", to: "/", icon: FaHome },
  { label: "Tentang", shortLabel: "Tentang", to: "/about", icon: FaUserAlt },
  { label: "Proyek", shortLabel: "Proyek", to: "/projects", icon: FaLaptopCode },
  { label: "Pengalaman", shortLabel: "Kerja", to: "/experiences", icon: FaBriefcase },
  { label: "Sertifikat", shortLabel: "Sertif", to: "/certificates", icon: FaCertificate },
  { label: "Kontak", shortLabel: "Kontak", to: "/contact", icon: FaEnvelope },
];

// Navbar atas — dipakai penuh di desktop, jadi versi ringkas
// (cuma logo) di mobile karena navigasinya pindah ke bottom bar.
const TopBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      bg={scrolled ? "ink.900" : "transparent"}
      borderBottom="1px solid"
      borderColor={scrolled ? "whiteAlpha.100" : "transparent"}
      backdropFilter={scrolled ? "blur(8px)" : "none"}
      transition="background 0.25s ease, border-color 0.25s ease"
    >
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 5, md: 10 }}
        h="72px"
        maxW="1200px"
        mx="auto"
      >
        <Box as={Link} to="/" _hover={{ textDecoration: "none" }}>
          <Text fontFamily="mono" fontSize="lg" color="slate.100">
            bagas<Text as="span" color="signal.500">.dev</Text>
          </Text>
        </Box>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {links.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Box
                key={item.to}
                as={Link}
                to={item.to}
                position="relative"
                _hover={{ textDecoration: "none" }}
                py={2}
              >
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  color={active ? "signal.500" : "slate.300"}
                  transition="color 0.2s ease"
                  _hover={{ color: "signal.500" }}
                >
                  {item.label}
                </Text>
                {active && (
                  <Box
                    position="absolute"
                    bottom="-1px"
                    left="0"
                    right="0"
                    height="2px"
                    bg="signal.500"
                  />
                )}
              </Box>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
};

// Bottom tab bar — muncul cuma di mobile, tap ikon langsung pindah halaman.
// Gaya "floating pill": bar melayang dengan sudut membulat, tab aktif
// dapat badge oranye padat, mengikuti palet blueprint (bukan pink/putih).
const BottomBar = () => {
  const location = useLocation();

  return (
    <Box
      as="nav"
      display={{ base: "flex", md: "none" }}
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      zIndex="999"
      justifyContent="center"
      sx={{ paddingBottom: "max(14px, env(safe-area-inset-bottom))" }}
      px={3}
    >
      <HStack
        bg="ink.800"
        border="1px solid"
        borderColor="whiteAlpha.150"
        borderRadius="20px"
        boxShadow="0 8px 24px rgba(0,0,0,0.45)"
        px={2}
        py={2}
        spacing={1}
        w="full"
        maxW="420px"
        justify="space-between"
      >
        {links.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Box
              key={item.to}
              as={Link}
              to={item.to}
              _hover={{ textDecoration: "none" }}
              flex="1"
              display="flex"
              justifyContent="center"
            >
              {active ? (
                <VStack
                  bg="signal.500"
                  color="ink.950"
                  borderRadius="14px"
                  px={2.5}
                  py={1.5}
                  spacing={0.5}
                  minW="52px"
                >
                  <Icon as={item.icon} boxSize={4} />
                  <Text fontFamily="mono" fontSize="9px" fontWeight="600" lineHeight="1">
                    {item.shortLabel}
                  </Text>
                </VStack>
              ) : (
                <VStack spacing={0.5} py={1.5} color="slate.500">
                  <Icon as={item.icon} boxSize={4} />
                  <Text fontFamily="mono" fontSize="9px" lineHeight="1">
                    {item.shortLabel}
                  </Text>
                </VStack>
              )}
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

const Navbar = () => {
  return (
    <>
      <TopBar />
      <BottomBar />
    </>
  );
};

export default Navbar;
