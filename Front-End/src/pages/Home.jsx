import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <>
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />

        <Heading>Home Page</Heading>

        <Footer />
      </Box>

    </>
  );
}
