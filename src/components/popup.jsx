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


const PopUp = ({ isOpen: isOpenPopUp, onClose: onClosePopUp, background, title, artist, year, frontImage, notas, rating }) => {
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
        <ModalHeader fontSize='2xl'>{title}</ModalHeader>
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
              backgroundImage={`url(${background})`}
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
              backgroundImage={`url(${frontImage})`}
              backgroundPosition='center'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
            </Box>
          </Box>
           
          <Heading as='h1' m={4} size='xs' fontSize='xl' align='center'>{ artist }</Heading>
          <Text>{title}</Text>
          <Text>{artist}</Text>
          <Text>{year}</Text>
          <Text>{notas}</Text>
          <Text>{rating}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onOpen}>
            Editar
          </Button>
          <PopupForm
            isOpen={isOpen}
            onClose={onClose}
            background={background}
            title={title}
            artist={artist}
            year={year}
            frontImage={frontImage}
            notas={notas}
            rating={rating}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PopUp