import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  Heading,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { SetCleanActiveAlbum } from '../../actions/albumes'

import PopupFormAlbum from './popup-form-album'
import ButtonsPopup from '../buttons/buttons-popup'


const PopUpView = ({ isOpen, onClose, album }) => {
  const dispatch = useDispatch()
  const { albumActive, listActive } = useSelector(state => state.albumes)

  const handleClosePopUp = () => {
    dispatch(SetCleanActiveAlbum())
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClosePopUp}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize='2xl'>{ album.title }</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            h='250px' 
            w='400px'
            position='relative'
            mb={12}
          >
            <Box
              h='250px'
              w='400px'
              backgroundImage={`url(${ album.bg })`}
              backgroundPosition='center'
              backgroundSize='cover'
              backgroundRepeat='no-repeat' 
              filter='auto'
              blur='3px'
            ></Box>
            <Box
              h='150px'
              w='150px'
              position='absolute'
              top='130px'
              right='125px'
              backgroundImage={`url(${ album.frontImage })`}
              backgroundPosition='center'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
            </Box>
          </Box>
           
          <Heading as='h1' m={4} size='xs' fontSize='xl' align='center'>{ album.artist }</Heading>
          <Text>Nombre del album: { album.title }</Text>
          <Text>Artista: { album.artist }</Text>
          <Text>Año de salida: { album.year }</Text>
          <Text>Notas pesonales: { album.notas }</Text>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Text size='2xl'>{ album.rating }</Text>
            <StarIcon size='3xl' m={2}/>
          </Box> 
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PopUpView

