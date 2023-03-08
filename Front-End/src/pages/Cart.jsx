import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PriceDetails from "../components/CartComponents/PriceDetails";
import CartItems from "../components/CartComponents/CartItems";

export default function Cart() {
  return (
    <>
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />
        <Box p={{ base: "40px 20px", sm: "40px 50px" }} mb="40px">
          <Box
            w="70%"
            m="0 auto"
            display={"grid"}
            gridTemplateColumns={"1.8fr 1fr"}
          >
            <Box
              borderRight={"1px solid black"}
              minH="400px"
              p={"0px 20px"}
            >
              <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} mb="20px">
              <Box pr='15px' borderRight={"1px solid black"}><Text fontSize={"22px"} color={"#333333"} fontWeight={"bolder"}>Cart</Text></Box>
              <Box ml="15px" ><Text fontSize={"22px"}  >4 Item</Text></Box>
              </Box>

              <Box>
                <CartItems />
                <CartItems />
                <CartItems />
                <CartItems />
              </Box>

            </Box>

            <Box h="400px" p={"0px 20px"} position={"relative"}>
              <PriceDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
