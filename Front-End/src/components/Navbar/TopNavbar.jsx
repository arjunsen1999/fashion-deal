import {
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
import {GoLock} from "react-icons/go"

export default function TopNavbar() {
  return (
    <Box px="40px" borderBottom={"0.2px solid gray"}>
      <Box
        w="100%"
        minH="50px"
        display={"grid"}
        gridTemplateColumns="1fr 1fr"
        gap="50px"
      >
        {/* Logo and Search */}
        <Box
          h="100%"
          display={"flex"}
          alignItems="center"
          justifyContent={"flex-start"}
        >
          <Box h="100%" mr="30px" w="30%" py="10px">
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
                  children={<BiSearchAlt color="gray.300" fontSize={"20px"} />}
                />
                <Input
                  type="text"
                  placeholder="Search..."
                  bg={"white"}
                  focusBorderColor="#008060"
                  fontSize={"20px"}
                />
              </InputGroup>
            </Box>
          </Box>
        </Box>

        {/* User, login, signup section */}
        <Box h="100%" display={"grid"} gridTemplateColumns="1fr 1fr 1fr">
          <Box px="20px" borderRight={"0.3px solid gray"}>
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
              <Text fontSize={"20px"} fontWeight="500">
                Download App
              </Text>
              {/* //////////////// */}
              <Box className={Style.downloadAppInnerMenu}>
                <Heading fontSize={"20px"} mb="20px">
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
          <Box px="20px" borderRight={"0.3px solid gray"}>
            <Box
              h="100%"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              cursor="pointer"
            >
              <Text fontSize={"20px"} fontWeight="500">
                Become a Supplier
              </Text>
            </Box>
          </Box>
          <Box px="20px" position={"relative"}>
            <Box
              h="100%"
              display={"grid"}
              gridTemplateColumns="1fr 1fr"
              gap="20px"
            >
              <Box
                cursor="pointer"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                flexDirection="column"
                className={Style.profile}
              >
                <Box>
                  <FaUserAlt fontSize={"20px"} />
                </Box>
                <Text fontSize={"18px"} fontWeight="460">
                  Profile
                </Text>
                {/* /////////////////// */}
                <Box className={Style.profileMenu}>
                  <Heading fontSize={"20px"} mb="8px">
                    Hello User
                  </Heading>
                  <Text fontSize={"12px"} mb="20px">
                    To access your Meesho account
                  </Text>
                  <Link to="">
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
                  <Box pt="20px" display={"flex"} alignItems="center" justifyContent={"flex-start"} borderTop=".2px solid gray">
                  <Box mr="20px"><GoLock fontSize={"18px"}/></Box>
                  <Text fontSize={"20px"} fontWeight="500">My Orders</Text>
                  </Box>
                </Box>
                {/* ////////////// */}
              </Box>
              <Box
                cursor="pointer"
                display={"flex"}
                flexDirection="column"
                alignItems="center"
                justifyContent={"center"}
              >
                <Box>
                  <BsCart3 fontSize={"20px"} />
                </Box>
                <Text fontSize={"18px"} fontWeight="460">
                  Cart
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
