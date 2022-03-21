import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";

export default function AddEventModal({ closeModal }) {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="rgba(200, 200, 200)"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="500px"
        height="500px"
        borderRadius="12px"
        backgroundColor="white"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        display="flex"
        flexDirection="column"
        padding="25px"
      >
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={() => closeModal(false)}
            backgroundColor="transparent"
            border="none"
            fontSize="25px"
            cursor="pointer"
          >
            {" "}
            X{" "}
          </Button>
        </Box>
        <Box display="inline-block" textAlign="center" marginTop="10px">
          <Text as="h1">Kao neki title</Text>
        </Box>
        <Box
          flex="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="1.7rem"
          textAlign="center"
        >
          <Text as="p">Kao neki body</Text>
        </Box>
        <Box
          flex="20%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={() => closeModal(false)} width="150px" height="45px" margin="10px" border="none" backgroundColor="cornflowerblue" color="white" borderRadius="8px" fontSize="20px" cursor="pointer"> Close </Button>
        </Box>
      </Box>
    </Box>
  );
}
