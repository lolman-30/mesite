import React from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// A section header styled like a code comment annotating the block below it —
// ties the "engineer" and "developer" halves of the portfolio together.
const SectionMark = ({ tag, title, ...rest }) => {
  return (
    <MotionBox
      mb={{ base: 8, md: 12 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      <HStack spacing={2} mb={2} color="line.500" fontFamily="mono">
        <Text fontSize="sm">{"//"}</Text>
        <Text fontSize="sm" letterSpacing="0.02em">
          {tag}
        </Text>
      </HStack>
      <Heading
        fontFamily="heading"
        fontSize={{ base: "3xl", md: "4xl" }}
        color="slate.100"
        fontWeight="600"
        letterSpacing="-0.01em"
      >
        {title}
      </Heading>
    </MotionBox>
  );
};

export default SectionMark;
