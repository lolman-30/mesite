import React from "react";
import { Box, Flex, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      py={6}
      px={{ base: 5, md: 10 }}
      pb={{ base: "calc(24px + 84px)", md: 6 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={3}
      >
        <Text fontFamily="mono" fontSize="xs" color="slate.500">
          © {new Date().getFullYear()} Bagas Dwi Pranata — dibangun dengan
          React & Chakra UI
        </Text>
        <HStack spacing={1}>
          <IconButton
            as="a"
            href="https://github.com/lolman-30"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            color="slate.400"
            size="sm"
            _hover={{ color: "signal.500", bg: "whiteAlpha.100" }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/bagas-dwi-pranata-526506294"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="slate.400"
            size="sm"
            _hover={{ color: "signal.500", bg: "whiteAlpha.100" }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/bagasdpranata"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            color="slate.400"
            size="sm"
            _hover={{ color: "signal.500", bg: "whiteAlpha.100" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
