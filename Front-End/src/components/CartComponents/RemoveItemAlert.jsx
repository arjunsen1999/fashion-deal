import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function RemoveItemAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Button
        color={"#008060"}
        leftIcon={<CloseIcon fontSize={"14px"} />}
        p="0px"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      >
        REMOVE
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Remove product from cart</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove (Blue Striped Sneakers For Men
            (Size: IND-5))
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              color={"#008060"}
            >
              CANCEL
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              color={"#008060"}
            >
              REMOVE
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
