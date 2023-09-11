import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  Stack,
  Progress,
} from "@chakra-ui/react";

const skillsData = [
  { name: "Skill 1", progress: 80 },
  { name: "Skill 2", progress: 65 },
  { name: "Skill 3", progress: 90 },
  // ...tambahkan lebih banyak skill di sini
];

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prevSkills) => {
        return prevSkills.map((skill) => {
          const newProgress = skill.progress < 80 ? skill.progress + 1 : skill.progress;
          return { ...skill, progress: newProgress };
        });
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Skill
        </Heading>

        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        {skills.map((skill, index) => (
          <Text key={index}>
            {skill.name}
            <Progress hasStripe value={skill.progress} transition={{ duration: 0.1 }} />
          </Text>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
