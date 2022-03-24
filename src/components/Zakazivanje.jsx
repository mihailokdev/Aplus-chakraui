import React, { useState, useRef } from "react";
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
  const initialRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
    <Box width="85%">
      <Box
        bg={"white"}
        pt={2}
        pl={2}
        pr={2}
        pb={1}
        borderRadius={5}
        borderTopColor="blue"
        borderTop="solid 3px blue"
        ml={5}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          dateClick={onOpen}
          eventClick={onOpen2}
          events="https://fullcalendar.io/demo-events.json?start=2022-03-22&end=2022-08-22"
          selectable={true}
          headerToolbar={{
            left: "prev, next, today",
            center: "title",
            right: "timeGridDay,dayGridMonth,timeGridWeek,",
          }}
          aspectRatio="0.95"
          height={630}
        />
      </Box>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          isCentered
          size="xl"
          initialFocusRef={initialRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              textAlign="center"
              borderTop={"solid 3px blue"}
              borderRadius={5}
            >
              {" "}
              Novi termin{" "}
            </ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody>
              <HStack>
                <Box mr={4} ml={4} width={"100%"}>
                  <FormControl>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Datum tretmana:{" "}
                    </FormLabel>
                    <Input type="date" ref={initialRef} />
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
                <Box mr={4} ml={4} width={"100%"}>
                  <FormControl>
                    <FormLabel mt={2} mb={2} ml={2} mr={2}>
                      {" "}
                      Vreme tretmana:{" "}
                    </FormLabel>
                    <Input type="time" width={"100%"} />
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
              <Button onClick={onClose} bg={"green"} mr={1} ml={1}>
                {" "}
                Zakazi tretman{" "}
              </Button>
              <Button onClick={onClose} bg={"red"} mr={1} ml={1}>
                {" "}
                Ponisti{" "}
              </Button>
              <Button onClick={onClose} bg="blue" mr={1} ml={1}>
                {" "}
                Close{" "}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {isOpen2 && (
        <Box>
          <Modal isOpen={isOpen2} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                textAlign="center"
                borderTop={"solid 3px blue"}
                borderRadius={5}
              >
                {" "}
                Termin{" "}
              </ModalHeader>
              <ModalCloseButton onClick={onClose2} />
              <ModalBody>
                <Box>Termin</Box>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose2}> Close </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </Box>
  );
}

export default Zakazivanje;
