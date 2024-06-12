import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  const montserratFont = "Montserrat, sans-serif";

  return (
    <Box bg="gray.800" color="white" py="4" width="100%">
      <Flex justify="space-between" align="center" mx="4">
        <Text fontSize="lg" fontFamily={montserratFont}>
          Bagas Dwi Pranata
        </Text>
        <Text fontSize="lg" fontFamily={montserratFont}>
        ReactJS <Link
            href="https://reactjs.org/versions#18.2.0"
            isExternal
            color="teal.300"
            mr={2}
          >
            18.2.0</Link> 
          Chakra-UI
          <Link
            href="https://chakra-ui.com/changelog#v2.8.2"
            isExternal
            color="teal.300"
            ml={2}
          >
            2.8.2
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
