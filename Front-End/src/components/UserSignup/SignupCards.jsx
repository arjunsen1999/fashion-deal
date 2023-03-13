import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
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
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../Redux/Auth/UserSignUp/Auth.action";
import { user_signup_reset } from "../../Redux/Auth/UserSignUp/Auth.actionType";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function SignupCards() {
  const { User_isLoading, isError, isSuccess, message } = useSelector((state) => state.userSignUp);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState("");
  const [Ploading, setPLoading] = useState(false);
  const toast = useToast();

  const [FormInput, setFormInput] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
  });

  const addProfile = async (event) => {
    setPLoading(true);
    let image = event.target.files[0];
    console.log();
    const dataImg = new FormData();
    dataImg.append("file", image);
    dataImg.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
    let { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      dataImg
    );
    setProfile(data.url);
    setPLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    FormInput.img = profile;
    dispatch(userSignup(FormInput))
  };

  useEffect(() =>{
     // For Error
     if(isError){
      toast({
        title: `Error`,
        position: "top",
        isClosable: true,
        status: "error",
        description : message
      })
     }

     // For Success
     if(isSuccess){
      toast({
        title: `Success`,
        position: "top",
        isClosable: true,
        status: "success",
        description : message
      })
     }

     dispatch({type : user_signup_reset});
  }, [isError, isSuccess])

  return (
    <>
      <Flex minH={"100vh"} align={"flex-start"} justify={"center"}>
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
                <Avatar
                  size="xl"
                  src={profile ? profile : "https://bit.ly/broken-link"}
                >
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                    onClick={() => setProfile("")}
                  />
                </Avatar>
              </Center>
              <Input
                type="file"
                id="file"
                display={"none"}
                onChange={addProfile}
              />
              <Center w="full">
                {Ploading ? (
                  <Button
                    isLoading
                    loadingText="Change Icon"
                    colorScheme="teal"
                    variant="outline"
                    border={"none"}
                    h="45px"
                    w="240px"
                  >
                    Change Icon
                  </Button>
                ) : (
                  <FormLabel
                    _hover={{ bg: "#E2E8F0" }}
                    htmlFor="file"
                    h="45px"
                    w="240px"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg="#F7FAFC"
                    cursor={"pointer"}
                    borderRadius={"8px"}
                  >
                    Change Icon
                  </FormLabel>
                )}
              </Center>
            </Stack>
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="fname"
                  value={FormInput.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lname"
                  value={FormInput.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="fashion-deal@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="email"
              value={FormInput.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                name="password"
                value={FormInput.password}
                onChange={handleChange}
                required
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
            {
              User_isLoading? <Button
              isLoading
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              _hover = {{
                color : "white"
              }}
              w="full"
              loadingText='Sign Up'
            
            >
              Sign Up
            </Button> : <Button
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              _hover = {{
                color : "white"
              }}
              w="full"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            }
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
