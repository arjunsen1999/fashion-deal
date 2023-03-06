import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <>
      <Link to="/">
        <Box display={"flex"} alignItems="center" justifyContent={"center"}>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </Box>
      </Link>
    </>
  );
}
