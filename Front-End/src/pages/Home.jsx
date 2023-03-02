import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";
import Banner from "../components/HomePage/Banner";
import HomeBox from "../components/HomePage/HomeBox";
import HomeCarousels from "../components/HomePage/HomeCarousels";
import PosterSection from "../components/HomePage/PosterSection";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />

        <Box p={{base : "40px 20px",sm : "40px 50px"}} mb="40px">
          <Banner />
          <HomeCarousels />
          <HomeBox />
          <HomeCarousels />
          <Box display={"grid"} gridTemplateColumns={{base : "repeat(1, 1fr)",md :"repeat(2, 1fr)"}} gap={"30px"}>
            <PosterSection />
            <PosterSection />
            <PosterSection />
            <PosterSection />
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
