import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Style from "../../styles/components/Navbar/TopNavbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserAlt, FaMobileAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoLock } from "react-icons/go";

export default function TopNavbar() {
  return (
    <Box px={{ md: "40px", base: "10px" }} borderBottomWidth={"1px"}>
      <Box
        w="100%"
        minH="50px"
        display={"grid"}
        gridTemplateColumns={{
          lg: "1fr 1fr",
          md: "2.5fr 1fr",
          base: "5fr 0.6fr",
        }}
        gap="50px"
      >
        {/* Logo and Search */}
        <Box
          h="100%"
          display={"flex"}
          alignItems="center"
          justifyContent={"flex-start"}
        >
          <Box h="100%" mr="30px" w={{md : "30%", base : "20%"}} py="10px">
            {/* <Image src="./asset/FashionDealLogo.png" alt="Logo" h="100%" w="100px"/> */}
            <Text>Logo</Text>
          </Box>
          <Box
            h="100%"
            w="70%"
            display={"flex"}
            alignItems="center"
            justifyContent={"flex-start"}
            py="10px"
          >
            <Box w="100%">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearchAlt color="#002E25" fontSize={"20px"} />}
                />
                <Input
                  type="text"
                  placeholder="Search..."
                  bg={"white"}
                  focusBorderColor="#008060"
                  fontSize={"20px"}
                  color={"black"}
                />
              </InputGroup>
            </Box>
          </Box>
        </Box>

        {/* User, login, signup section */}
        <Box
          h="100%"
          display={"grid"}
          gridTemplateColumns={{ xl: "1fr 1fr 1fr", lg: "2fr 1fr", base: "1fr" }}
        >
          <Box
            px="20px"
            borderRightWidth={"1px"}
            display={{ xl: "block", base: "none" }}
          >
            <Box
              h="100%"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              cursor="pointer"
              className={Style.downloadApp}
            >
              <Box>
                <FaMobileAlt fontSize={"18px"} mr="20px" />
              </Box>
              <Text fontSize={"18px"} fontWeight="500">
                Download App
              </Text>
              {/* //////////////// */}
              <Box className={Style.downloadAppInnerMenu} color={"black"}>
                <Heading fontSize={"18px"} mb="20px">
                  Download From a
                </Heading>
                <Link to="">
                  <Box mb="20px">
                    <Image src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
                  </Box>
                </Link>
                <Link to="">
                  <Box>
                    <Image src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
                  </Box>
                </Link>
              </Box>
              {/* /////////////////////// */}
            </Box>
          </Box>
          <Box
            px="20px"
            borderRightWidth={"1px"}
            display={{ lg: "block", base: "none" }}
          >
            <Box
              h="100%"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              cursor="pointer"
            >
              <Text fontSize={"18px"} fontWeight="500">
                Become a Supplier
              </Text>
            </Box>
          </Box>
          <Box px={{md : "20px", base : "0px"}} position={"relative"}>
            <Box
              h="100%"
              display={"grid"}
              gridTemplateColumns={{ md: "1fr 1fr", base : "1fr" }}
              gap={{md :"20px", sm : "0px"}}
              gridColumnStart = {{md : "auto", base : -1}}
            >
              <Box
                cursor="pointer"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection="column"
            
                className={Style.profile}
                w={{md : "100%", base:"50%"}}
              >
                <Box>
                  <FaUserAlt fontSize={"20px"} />
                </Box>
                <Text fontSize={"18px"} fontWeight="460">
                  Profile
                </Text>
                {/* /////////////////// */}
                <Box className={Style.profileMenu} color={"black"} w={{base : "200px", md : "110%"}}>
                  <Heading fontSize={"20px"} mb="8px">
                    Hello User
                  </Heading>
                  <Text fontSize={"12px"} mb="20px">
                    To access your Meesho account
                  </Text>
                  <Link to="/userSignup">
                    {" "}
                    <Button
                      mb="20px"
                      bg="#008060"
                      color={"white"}
                      size="lg"
                      w="100%"
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Box
                    pt="20px"
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"flex-start"}
                    borderTopWidth="1px"
                  >
                    <Box mr="20px">
                      <GoLock fontSize={"18px"} />
                    </Box>
                    <Text fontSize={"20px"} fontWeight="500">
                      My Orders
                    </Text>
                  </Box>
                </Box>
                {/* ////////////// */}
              </Box>
           
           <Box
                cursor="pointer"
                display={{ md: "flex", base: "none" }}
                flexDirection="column"
                alignItems="center"
                justifyContent={"center"}
              >
               <Link to="/cart">
               <Box position={"relative"} >
                <Badge  colorScheme='white' position={"absolute"} bg="#C53030" borderRadius={"50%"} color="white" top="-5px" left="15px" border={"1px solid white"}>4</Badge>
                  <BsCart3 fontSize={"20px"} />
                </Box>
                <Text fontSize={"18px"} fontWeight="460">
                  Cart
                </Text>
               </Link>
              </Box>
    
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
