import React from 'react'
import { Box, Button, Text } from "@chakra-ui/react";

export default function PriceDetails() {
  return (
    <>
        <Box  w="270px" position={"fixed"}>
            <Text fontSize={"22px"} color={"#333333"} fontWeight={"bolder"} mb="20px">Price Details</Text>
            <Box borderBottom={"1px solid black"}>
             <Box display={"flex"} alignItems={"center"} mb="15px" justifyContent={"space-between"}>
              <Text fontSize={"18px"}>Total Product Price</Text>
              <Text fontSize={"18px"}>&#8377;564</Text>
             </Box>

             <Box display={"flex"} alignItems={"center"} mb="10px" justifyContent={"space-between"}>
              <Text fontSize={"18px"}>Additional Fees</Text>
              <Text fontSize={"18px"}>+ &#8377;84</Text>
             </Box>

            </Box>
            <Box display={"flex"} alignItems={"center"} p="15px 0px" justifyContent={"space-between"}>
              <Text fontSize={"18px"} fontWeight={"bolder"}>Order Total</Text>
              <Text fontSize={"18px"} fontWeight={"bolder"}>&#8377;84</Text>
             </Box>
             <Box p="8px 0px" bg={"#F9F9F9"} mb="15px">
              <Text fontSize={"10px"} textAlign={"center"} fontWeight={"bold"}>Clicking on ‘Continue’ will not deduct any money</Text>
             </Box>
             <Box mb="15px">
              <Button w="100%" color={"white"} bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"}>Continue</Button>
             </Box>
          </Box>
    </>
  )
}
