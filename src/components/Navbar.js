import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
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
        <Link as={ReactRouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Text fontSize="lg">Bagas Dwi Pranata</Text>
        </Link>
      </Flex>

      <Flex justify="right" flex="1">
        <Link
          as={ReactRouterLink}
          to="/"
          display="flex"
          alignItems="right"
          _hover={{ textDecoration: "none" }}
          mr="10px"
        >
          <Text fontSize="lg">Home</Text>
        </Link>
        <Link
          as={ReactRouterLink}
          to="/Project"
          display="flex"
          alignItems="right"
          _hover={{ textDecoration: "none" }}
          mr="10px"
        >
          <Text fontSize="lg">Project</Text>
        </Link>
        <Link
          as={ReactRouterLink}
          to="/Certificates"
          display="flex"
          alignItems="right"
          _hover={{ textDecoration: "none" }}
          mr="10px"
        >
          <Text fontSize="lg">Certificates</Text>
        </Link>
        <Link
          as={ReactRouterLink}
          to="/Experients"
          display="flex"
          alignItems="right"
          _hover={{ textDecoration: "none" }}
          mr="10px"
        >
          <Text fontSize="lg">Experiences</Text>
        </Link>
        <Link
          as={ReactRouterLink}
          to="/About"
          display="flex"
          alignItems="right"
          _hover={{ textDecoration: "none" }}
          mr="10px"
        >
          <Text fontSize="lg">About</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
