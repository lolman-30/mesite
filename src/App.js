import React, { Suspense, lazy, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";

import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // dimuat langsung, ini halaman pertama yang dilihat orang

import Icon from "./assets/gambar/icon.png";

// Halaman selain Beranda baru diunduh saat orang benar-benar membukanya,
// jadi kunjungan pertama ke Beranda tidak perlu menunggu kode semua halaman.
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <Flex minH="60vh" align="center" justify="center">
      <Text fontFamily="mono" fontSize="sm" color="slate.500">
        memuat halaman...
      </Text>
    </Flex>
  );
}

function MainContent() {
  return (
    <Box flex="1" pt="72px" pb={{ base: "88px", md: 0 }}>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <title>Bagas Dwi Pranata — Web Developer</title>
        <link rel="icon" type="image/png" href={Icon} />
      </Helmet>

      <Router>
        <ScrollToTop />
        <Flex direction="column" minHeight="100vh">
          <Navbar />
          <MainContent />
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
