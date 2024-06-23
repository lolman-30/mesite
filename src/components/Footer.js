import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  const montserratFont = "Montserrat, sans-serif";

  return (
    <Box bg="gray.800" color="white" py="4" width="100%">
      <Flex align="center" justify="center">
        <Text fontSize="lg" fontFamily={montserratFont}>
          Bagas Dwi Pranata
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
