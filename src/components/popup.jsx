import React from 'react'
import { useDispatch } from 'react-redux'
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
import PopupForm from './popup-form'
import { SetCleanActiveAlbum } from '../actions/albumes'
import { StarIcon } from '@chakra-ui/icons'


const PopUp = ({ isOpen: isOpenPopUp, onClose: onClosePopUp, album }) => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } =  useDisclosure()

  const handleClosePopUp = () => {
    dispatch(SetCleanActiveAlbum())
    onClosePopUp()
  }

  return (
    <Modal isOpen={isOpenPopUp} onClose={handleClosePopUp}>
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
          <Button onClick={onOpen}>
            Editar
          </Button>
          <PopupForm
            isOpen={isOpen}
            onClose={onClose}
            album={album} 
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PopUp