import { Flex, Stack, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent="center" textAlign="center" bg="gray.800">
      <Stack spacing={4} maxW={"3xl"} textAlign={"center"}>
        <Heading
          px="6"
          py="3"
          top="0"
          left="0"
          width="100%"
          zIndex="999"
          bg="gray.800"
          color="white"
          height="150px"
          align="center"
          boxShadow="md"
          fontWeight={"bold"}
          fontSize={{ base: "3xl", sm: "4xl" }}
        >
          About
          <Text color={"gray.600"} top="0" fontSize={"6xl"}>
            Hi, I'm Bagas
          </Text>
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Header;
