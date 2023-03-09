import { Box } from "@chakra-ui/react";
import React from "react";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

export default function Navbar() {
  return (
    <>
      <Box
        w="100%"
        bg="#008060"
        zIndex={"10"}
        position={"sticky"}
        top="0px"
      >
        <TopNavbar />
        <BottomNavbar />
      </Box>
    </>
  );
}
