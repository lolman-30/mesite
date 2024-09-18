import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const montserratFont = "Montserrat, sans-serif";

  // Menentukan layout grid responsif berdasarkan ukuran layar
  const gridColumns = useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" });

  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={6}>
        <Heading
          px="6"
          py="3"
          top="0"
          left="0"
          width="100%"
          color={"gray.600"}
          height="100px"
          align="center"
          fontWeight={"bold"}
          fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })} // Responsif ukuran font heading
        >
          Kontak
        </Heading>
        <Grid templateColumns={gridColumns} gap={6} w="full">
          {" "}
          {/* Responsif kolom grid */}
          <GridItem mr={useBreakpointValue({ base: 0, md: 5 })}>
            {" "}
            {/* Responsif margin */}
            <Text as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
              Ayo Kerja Sama
            </Text>
            <Text mb={4} textAlign="justify" fontFamily={montserratFont}>
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
              atau peluang untuk menjadi bagian dari visi Anda. Jika Anda
              memiliki proyek menarik atau ide inovatif, mari kita berkolaborasi
              dan mewujudkannya. Saya sangat antusias untuk mengeksplorasi
              bagaimana kita dapat bekerja sama untuk mencapai tujuan perusahaan
              Anda dan menciptakan sesuatu yang luar biasa.
            </Text>
          </GridItem>
          <GridItem ml={useBreakpointValue({ base: 0, md: 5 })}>
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              Ikuti di media sosial
            </Text>
            <HStack
              spacing={4}
              justify={useBreakpointValue({ base: "center", md: "start" })}
            >
              <Link href="https://github.com/lolman-30" target="_blank" mx="2">
                <FaGithub fontSize="30px" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bagas-dwi-pranata-526506294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmRsMM7IiSMS4YIPr55BWCA%3D%3D
              "
                target="_blank"
                mx="2"
              >
                <FaLinkedin fontSize="30px" />
              </Link>
              <Link
                href="https://www.instagram.com/bagasdpranata"
                target="_blank"
                mx="2"
              >
                <FaInstagram fontSize="30px" />
              </Link>
              <Link href="https://t.me/bagasdpranata" target="_blank" mx="2">
                <FaTelegram fontSize="30px" />
              </Link>
            </HStack>
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              Email
            </Text>
            <HStack
              justify={useBreakpointValue({ base: "center", md: "start" })}
            >
              <Text fontFamily={montserratFont}>bagasdwipranata@gmail.com</Text>
            </HStack>
            <Text
              fontSize="lg"
              fontFamily={montserratFont}
              fontWeight="bold"
              mb={2}
              mt={5}
            >
              No. HP
            </Text>
            <HStack
              justify={useBreakpointValue({ base: "center", md: "start" })}
            >
              <Text fontFamily={montserratFont}>+62 895 6379 14508</Text>
            </HStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Contact;
