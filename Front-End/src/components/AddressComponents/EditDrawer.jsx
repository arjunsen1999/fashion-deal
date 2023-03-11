import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Heading,
    Input,
  } from "@chakra-ui/react";
  import {
    Box,
    Button,
    CloseButton,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import { FiPhone } from 'react-icons/fi';
  import {
    FormControl,
  } from '@chakra-ui/react'
  import {HiOutlineLocationMarker} from "react-icons/hi"

export default function EditDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  return (
    <>
      <Heading as={"h1"} cursor={"pointer"} fontSize={"22px"} onClick={onOpen} color="#008060" mb="20px">Edit</Heading>

      {/* ????????? Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
        p="0px"
      >
        <DrawerOverlay />
        <DrawerContent display={"flex"} flexDirection={"column"}>
          <Box
          position={"sticky"}
          top={"0px"}
            borderWidth="1px"
            p="30px 20px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={"20px"} fontWeight={"bold"}>
            EDIT ADDRESS
            </Text>
            <Box onClick={onClose}>
              <CloseButton
                fontSize={"20px"}
                fontWeight={"bold"}
                _hover={{ bg: "white" }}
              />
            </Box>
          </Box>

          <Box borderTopWidth="1px" p="20px" h="440px"  overflowY={"scroll"}>
           


            <Box  display={"flex"} alignItems={"center"} justifyContent={"flex-start"} mb="30px">
                <Box mr="20px" color={"#008060"}><FiPhone fontSize={"24px"}/></Box>
                <Box><Heading as="h3" fontSize={"24px"}>Contact Details</Heading></Box>
            </Box>

            <FormControl>
            <Input variant='flushed' placeholder='Name' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            <Input variant='flushed' placeholder='Phone Number' focusBorderColor={"#008060"} fontSize={"20px"} mb="40px"/>
            <Box mb="40px" display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                <Box mr="20px" color={"#008060"}><HiOutlineLocationMarker fontSize={"24px"} /></Box>
                <Box><Heading as="h3" fontSize={"24px"}>Address</Heading></Box>
            </Box>
            <Input variant='flushed' placeholder='House no./Building Name' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            <Input variant='flushed' placeholder='Road Name/ Area/ Colony' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            <Input variant='flushed' placeholder='Pincode' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            <Box  display={"grid"} gridTemplateColumns={{base : "1fr", sm : "1fr 1fr"}} gap={"10px"}>
            <Input variant='flushed' placeholder='City' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            <Input variant='flushed' placeholder='State' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>
            </Box>
            <Input variant='flushed' placeholder='Nearby Location (optional)' focusBorderColor={"#008060"} fontSize={"20px"} mb="20px"/>

            </FormControl>






          </Box>

          <Box mt="auto" p="20px" position={"fixed"} bottom="0px" w="100%" zIndex={10}>
            <Button w="100%" fontSize={"20px"} h="50px" bg="#008060" color="white">
                Save Address & Continue
            </Button>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  )
}
