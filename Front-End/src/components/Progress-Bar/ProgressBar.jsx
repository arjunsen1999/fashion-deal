import { Box, Progress } from "@chakra-ui/react";
import React from "react";

export default function ProgressBar() {
  return (
    <>
      <Box
       border={"1px solid red"}
        mb="30px"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bg="white"
        position={"sticky"}
        top="0px"
      >
        <Box  w="500px" position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box w="30px" h="30px" bg="white" border={"2px solid blue"}  borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>1</Box>
        <Box w="30px" h="30px" bg="white" border={"2px solid #EDF2F7"}  borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>2</Box>
        <Box w="30px" h="30px" bg="white" border={"2px solid #EDF2F7"}  borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>3</Box>
        <Box w="30px" h="30px" bg="white" border={"2px solid #EDF2F7"}  borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>4</Box>
          <Box  h="3px"  position={"absolute"} zIndex={-1} w="100%" top={"50%"} left={"0px"} bg="#EDF2F7">
            <Box h="3px" w="35%" bg="blue"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
