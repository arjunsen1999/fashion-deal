import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import LoginFormBox from "../components/Login/LoginFormBox";


export default function Login() {
  return (
    <>
     <Box w="100%" minHeight={"100vh"} display="flex" flexDirection={"column"}>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
          <Box minH="200px" p="50px 100px">
            <Box minH="100vh">
              <Box mb="20px">
                <Link to="/">
                  <Box display={"flex"} alignItems="center">
                    <Box mr="5px">
                      <HiChevronLeft color="#A0AEC0" fontSize={"18px"} />
                    </Box>
                    <Text color="#A0AEC0">Back to Home</Text>
                  </Box>
                </Link>
              </Box>

              <LoginFormBox />
            </Box>
          </Box>

          <Box minH="200px">
            <Box
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              minH={"100vh"}
              borderRadius={"0px 0px 0px 250px"}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
