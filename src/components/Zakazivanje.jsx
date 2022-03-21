import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@chakra-ui/react";
import AddEventModal from "./AddEventModal";
import ChakraModal from "./ChakraModal";

function Zakazivanje() {
  const [openModal, setOpenModal] = useState(false);

  function dateClickHandler(info) {
    setOpenModal(true);
  }
  function eventClickHandler(eventInfo) {
    alert(eventInfo.event);
  }
  return (
    <Box>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        dateClick={dateClickHandler}
        eventClick={eventClickHandler}
        events="https://fullcalendar.io/demo-events.json?start=2022-03-22&end=2022-08-22"
        selectable={true}
        headerToolbar={{
          left: "prev, next, today",
          center: "title",
          right: "timeGridDay,dayGridMonth,timeGridWeek,",
        }}
      />
      {openModal && <ChakraModal closeModal={setOpenModal} />}
    </Box>
  );
}

export default Zakazivanje;
