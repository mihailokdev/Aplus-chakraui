import React from "react";
import Zakazivanje from "./components/Zakazivanje";
import Dashboard from "./components/Dashboard";
import { Box, Grid, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChakraSidebar from "./components/ChakraSidebar";

export default class DemoApp extends React.Component {
  render() {
    return (
      <Box className="App">
        <Navbar />
        <HStack>
          <ChakraSidebar />
          <Zakazivanje />
        </HStack>
      </Box>
    );
  }
}
