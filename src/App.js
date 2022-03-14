import "./App.css";
import Sidebar from "./components/Sidebar";
import { Router } from "react-router-dom";
import { ChakraProvider, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import ChakraSidebar from "./components/ChakraSidebar";
import Nav from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <HStack alignItems="flex-start">
        <ChakraSidebar />
        <Dashboard />
      </HStack>
    </div>
  );
}

export default App;
