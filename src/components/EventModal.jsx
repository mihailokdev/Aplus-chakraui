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

function EventModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    <Box>
        <Modal isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center" borderTop={"solid 3px blue"} borderRadius={5}> Termin </ModalHeader>
                <ModalCloseButton onClick={onClose} />
                <ModalBody>
                    <Box>
                        Termin: {eventInfo.event.title}
                        Pocetak: {eventInfo.event.start}
                        Kraj: {eventInfo.event.end}
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}> Close </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
}

export default EventModal;