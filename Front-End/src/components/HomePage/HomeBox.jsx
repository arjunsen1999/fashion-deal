import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import LineCards from '../ProductCards/LineCards'

export default function HomeBox() {
  return (
    <>
     <Box w="100%" mb="50px" mr="30px" >
            <Heading as="h1" fontSize={"28px"} mb="20px">
              Heading
            </Heading>

          <Box display="grid" gridTemplateColumns={{base : "1fr",sm : "repeat(2, 1fr)", md : "repeat(3, 1fr)", xl : "repeat(4, 1fr)"}} gap={"20px"}>
                <LineCards />
                <LineCards />
                <LineCards />
                <LineCards />
                <LineCards />
                <LineCards />
                <LineCards />
                <LineCards />
          </Box>
          </Box>
    </>
  )
}
