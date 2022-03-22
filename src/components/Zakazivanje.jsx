import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  HStack,
} from "@chakra-ui/react";
import AddEventModal from "./AddEventModal";
import ChakraModal from "./ChakraModal";

function Zakazivanje() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function eventClickHandler(eventInfo) {
    alert(eventInfo.event);
  }
  return (
    <Box>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        dateClick={onOpen}
        eventClick={eventClickHandler}
        events="https://fullcalendar.io/demo-events.json?start=2022-03-22&end=2022-08-22"
        selectable={true}
        headerToolbar={{
          left: "prev, next, today",
          center: "title",
          right: "timeGridDay,dayGridMonth,timeGridWeek,",
        }}
      />
      {isOpen && (
        <Modal isOpen={isOpen} isCentered size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center"> Novi termin </ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody>
              <HStack>
                <Box mr={4} ml={4}>
                  <FormControl>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Datum tretmana:{" "}
                    </FormLabel>
                    <Input type="date" />
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Zaposleni{" "}
                    </FormLabel>
                    <Select placeholder="Izaberite">
                      <option> Zaposleni 1 </option>
                      <option> Zaposleni 2 </option>
                    </Select>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Usluga{" "}
                    </FormLabel>
                    <Select placeholder="Izaberite">
                      <option> Usluga 1 </option>
                      <option> Usluga 2 </option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mr={4} ml={4}>
                  <FormControl>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Datum tretmana:{" "}
                    </FormLabel>
                    <Input type="time" />
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Klijent{" "}
                    </FormLabel>
                    <Select placeholder="Izaberite">
                      <option> Klijent 1 </option>
                      <option> Klijent 2 </option>
                    </Select>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Popust{" "}
                    </FormLabel>
                    <Select placeholder="Nije odredjeno">
                      <option> Popust 10% </option>
                      <option> Popust 20% </option>
                    </Select>
                  </FormControl>
                </Box>
              </HStack>
              <Box mt={2}>
                <FormControl>
                  <FormLabel> Napomena </FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} bg="">
                {" "}
                Close{" "}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default Zakazivanje;
