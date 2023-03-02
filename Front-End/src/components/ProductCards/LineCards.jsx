import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

function Rating({ rating, numReviews }) {
  return (
    <Box display={"flex"}  alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default function LineCards({ rating, numReviews }) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Center>
        <Box
          w="xs"
          rounded={"sm"}
          //   my={5}
            mx={5}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        >
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            <Img
              src={
                "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="full"
              alt={"Blog Image"}
            />
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                React
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              React v18.0
            </Heading>
            <Text color={"gray.500"} noOfLines={2} mb="10px">
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
            <Stack direction={"row"} align={"left"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $57
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                $199
              </Text>
            </Stack>
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={4.2} numReviews={34} />
            </Flex>
          </Box>
          <HStack borderTop={"1px"} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              cursor={"pointer"}
              w="full"
            >
              <Text fontSize={"md"} fontWeight={"semibold"}>
                View more
              </Text>
              <BsArrowUpRight />
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              borderLeft={"1px"}
              cursor="pointer"
              onClick={() => setLiked(!liked)}
            >
              <AiOutlineShoppingCart fontSize={"28px"} />
            </Flex>
          </HStack>
        </Box>
      </Center>
    </>
  );
}
