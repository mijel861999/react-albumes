import React from 'react'

import { 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Box,
  Heading
} from '@chakra-ui/react'


const PopUp = ({ isOpen, onClose, background, title, artist, year, frontImage, notas, rating }) => {
    console.log(title)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            h='250px'
            w='400px'
            backgroundImage={`url(${background})`}
            backgroundPosition='center'
            backgroundSize='cover'
            backgroundRepeat='no-repeat' 
          ></Box>
          <Heading as='h1' m={4} size='xs' align='center'>{ artist }</Heading>
        </ModalBody>
        <ModalFooter>
          <Button>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PopUp