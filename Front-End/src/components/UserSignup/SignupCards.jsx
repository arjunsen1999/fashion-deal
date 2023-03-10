import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SmallCloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignupCards() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"flex-start"}
        justify={"center"}
        
      >
        <Stack spacing={4} w={"full"} maxW={"md"} rounded={"xl"} p={6} my={2}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Sign Up
          </Heading>
          <Text color={"#A0AEC0"} mb="30px">
            Enter your email and password to sign Up!
          </Text>
          <FormControl id="userName">
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/broken-link">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Input type="file" id="file" display={"none"}/>
              <Center w="full">
              <FormLabel _hover={{bg : "#E2E8F0"}} htmlFor="file" h="45px" w="240px" display={"flex"} alignItems={"center"} justifyContent={"center"} bg="#F7FAFC" cursor={"pointer"} borderRadius={"8px"}>Change Icon</FormLabel>
              </Center>
            </Stack>
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="fashion-deal@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              w="full"
            >
              Sign Up
            </Button>
          </Stack>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button w="full">
              <Box mr="10px">
                <FcGoogle />
              </Box>
              Sign in with Google
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"} color="#A0AEC0">
              Already a user?{" "}
              <Link to="/login">
                <span style={{ color: "blue" }}>Login</span>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
