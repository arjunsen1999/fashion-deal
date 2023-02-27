import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import SellerNavbar from '../../components/Seller-Navbar/SellerNavbar'

export default function SellerHome() {
  return (
   <>
    <SellerNavbar />
    <Box w="100%" display={"flex"} minH="100vh" bg="#EDF2F7">
      <Box w={{ base: "0px", md: "290px" }}></Box>
      <Box w="100%" px="30px">
        <Heading>Hello </Heading>
      </Box>
    </Box>
   </>
  )
}
