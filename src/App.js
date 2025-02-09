import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Box, Flex, ChakraProvider, Text } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Icon from "./assets/gambar/icon.png";

function MainContent() {
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      navigate("/");
      setIsFirstLoad(false); // Set first load to false after redirecting
    }
  }, [navigate, isFirstLoad]);

  return (
    <Box flex="1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Deteksi perangkat berdasarkan lebar layar
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Jalankan deteksi saat pertama kali render
    handleResize();

    // Tambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    // Tampilkan pesan jika diakses dari perangkat mobile
    return (
      <ChakraProvider>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bg="gray.100"
        >
          <Text fontSize="xl" textAlign="center">
            Lebih baik buka di laptop/PC untuk pengalaman terbaik.
          </Text>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Helmet>
        <title>Bagas Dwi Pranata</title>
        <link rel="icon" type="image/png" href={Icon} />
      </Helmet>

      <Router>
        <Flex direction="column" minHeight="100vh">
          {/* <Navbar /> */}
          <Sidebar />
          <Box flex="1" ml="250px" mt="0">
            <MainContent />
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
