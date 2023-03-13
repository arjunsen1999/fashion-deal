import React from "react";
import { useToast } from "@chakra-ui/react";

export default function Toast({position, status, msg}) {
  const toast = useToast();
  return (
    <>
      {toast({
        title: `Success`,
        position: position,
        isClosable: true,
        status: status,
        description : msg
      })}
    </>
  );
}
