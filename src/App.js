import React from "react";
import Zakazivanje from "./components/Zakazivanje";
import Dashboard from "./components/Dashboard";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChakraSidebar from "./components/ChakraSidebar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <Zakazivanje/>
    );
  }
}
