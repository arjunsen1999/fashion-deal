import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function SingleProduct() {

  return (
    <>
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />
        <Box p={{ base: "40px 10px", sm: "40px 50px" }} mb="40px">
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"30px"}>
            <Box border={"1px solid black"} minH="200px"></Box>
            <Box borderWidth={"1px"} minH="200px"></Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
