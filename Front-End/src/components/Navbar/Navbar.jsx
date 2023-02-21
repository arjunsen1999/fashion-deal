import { Box } from "@chakra-ui/react";
import React from "react";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

export default function Navbar() {
  return (
    <>
      <Box w="100%" bg="rgb(245, 245, 245)" >
        <TopNavbar />
        <BottomNavbar />
      </Box>
    </>
  );
}
