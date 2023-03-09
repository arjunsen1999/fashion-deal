import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import EditDrawer from '../components/AddressComponents/EditDrawer'
import PriceDetails from '../components/CartComponents/PriceDetails'
import Navbar from '../components/Navbar/Navbar'

export default function Address() {
  return (
    <>
     <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Navbar />
        <Box p={{ base: "40px 10px", sm: "40px 50px" }} mb="40px">
          <Box
            w={{base : "100%", md : "80%", lg : "70%"}}
            m="0 auto"
            display={"grid"}
            gridTemplateColumns={{base : "1fr", md : "1.8fr 1fr"}}
          >
            <Box
              
              borderRightWidth = {{base : "0px", md : "1px"}}
              minH="400px"
              p={"0px 20px"}
            >
              <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb="20px">
              <Box pr='15px'><Text fontSize={"22px"} color={"#333333"} fontWeight={"bolder"}>Select Delivery Address</Text></Box>
              <Box ml="15px" ><Text fontSize={"22px"} cursor="pointer" color={"#008060"} >+ ADD NEW ADDRESS</Text></Box>
              </Box>

              <Box bg="#E7EEFF" p="20px" borderRadius={"12px"}>
               <Heading as={"h1"} fontSize={"26px"} mb="30px">Arjun Sen</Heading>
               <Box mb="20px">
                <Text fontSize={"18px"} fontWeight={"500"} color={"#7B6666"}>Raniganj, Raniganj, Raniganj,Raniganj,</Text>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#7B6666"}>Others - 713323</Text>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#7B6666"}>+91 9851455712</Text>
               </Box>
               <EditDrawer />
               <Button
              w="100%"
              color={"white"}
              bg={
                "#008060"
              }
              h="45px"
              py="20px"
              fontSize={"20px"}
            >
              Deliver to this Address
            </Button>
              </Box>

            </Box>

            <Box  h={{ base : "100%", md : "400px"}} p={{base : "0px", md : "0px 20px"}} position={"relative"} mt={{base : "30px",md : "0px"}}>
              <PriceDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
