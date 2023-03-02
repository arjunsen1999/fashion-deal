import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function PosterSection() {
  return (
    <>
      <Box border="1px solid black" h="250px">
        <Grid
          h="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns={"repeat(3, 1fr)"}
          gap={4}
        >
          <GridItem rowSpan={{ base: 1, sm: 2 }} colSpan={1} bg="tomato">
            {" "}
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 1 }} bg="tomato">
            {" "}
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 1 }} bg="tomato">
            {" "}
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2 }} bg="tomato">
            {" "}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
