import React from "react";
import {
  Text,
  Box,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div id="about">
      <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Tentang
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }} textAlign="justify">
            Saya Bagas Dwi Pranata, lulusan Teknik Informatika yang penuh semangat untuk terus belajar dan mengembangkan diri dalam teknologi. Minat saya terutama pada pengembangan front-end web, menciptakan antarmuka menarik dan fungsional. Saat belajar, saya telah menguasai teknologi seperti HTML, CSS, JavaScript, dan ReactJS.

            Dengan IPK 3,58, saya percaya kerja keras dan komitmen adalah kunci meraih prestasi. Saya ingin bergabung dengan tim dinamis yang berdedikasi di perusahaan Anda, dan membawa semangat belajar serta kontribusi berharga dalam menghadapi tantangan baru. Saya terbuka untuk berkomunikasi lebih lanjut tentang pengalaman dan keterampilan saya melalui media sosial.

            Saya berharap berkesempatan untuk menjadi bagian dari tim perusahaan Anda dan bersama-sama meraih kesuksesan.
        </Text>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }} textAlign="justify">
          Salam hangat, Bagas Dwi Pranata
        </Text>
      </Stack>
    </Box>
    </div>
  );
};

export default About;
