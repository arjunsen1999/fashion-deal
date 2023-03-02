import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";
import Banner from "../components/HomePage/Banner";
import HomeCarousels from "../components/HomePage/HomeCarousels";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />

        <Box p="40px 50px" mb="40px">
          <Banner />
          <HomeCarousels />
          <HomeCarousels />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
