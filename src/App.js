import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Box, Flex, ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
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
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Helmet>
        <title>Bagas Dwi Pranata</title>
        <link rel="icon" type="image/png" href={Icon} />
      </Helmet>

      <Router>
        <Flex direction="column" minHeight="100vh">
          <Navbar />
          {/* <Header /> */}
          <MainContent />
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
