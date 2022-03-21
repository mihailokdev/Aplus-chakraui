import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Button } from '@chakra-ui/react'
import React from 'react'

function ChakraModal({ closeModal }) {
  return (
    <Modal>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader> Title </ModalHeader>
            <ModalBody>
                Nesto
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => closeModal(false)}> Close </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ChakraModal