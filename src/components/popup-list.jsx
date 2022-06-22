import React, { useState } from 'react'
import { 
  Modal,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  Text,
  ModalFooter,
  Button,
} from '@chakra-ui/react'

const PopupList = ({ isOpen, onClose }) => {
  const [searchedAlbums, setSearchedAlbums] = useState([])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
     <ModalOverlay /> 
     <ModalContent>
      <ModalHeader>
        <Heading>Busca tu album para esta lista</Heading>
      </ModalHeader>
      <ModalCloseButton/>
      <ModalBody>
        <Input placeholder='Busca tu album' />
        <Box>
          {
            (searchedAlbums.length === 0) ? 
            (
              <Text m={3}>No hay resultados</Text>
            ) : 
            (
              <Box m={3}>Discos</Box>
            )
          } 
        </Box>
      </ModalBody>
     </ModalContent>
    </Modal>
  )
}

export default PopupList
