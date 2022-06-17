import React, { useState } from 'react'
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
  Input,
  Textarea
} from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'
import Rating from './rating'


const PopupForm = ({ isOpen, onClose, background, title, artist, year, frontImage, notas, rating }) => {
  const [inputsValues, handleInputChange] = useForm({
    fTitle: title,
    fArtist: artist,
    fYear: year,
    fBg: background,
    fFrontImage: frontImage,
    fNotas: notas,
    fRating: rating
  })

  const [ratingValue, setRatingValue] = useState(0)

  const { fTitle, fArtist, fYear, fBg, fFrontImage, fNotas, fRating } = inputsValues

  const handleSave = () => {
    console.log(inputsValues)
    console.log({
      ...inputsValues,
      fRating: ratingValue
    })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader m={5}>
          <Input placeholder='Titulo' name='fTitle' value={fTitle} onChange={handleInputChange} />
        </ModalHeader>
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
          <Input mt={3} placeholder='Artista' name='fArtist' value={fArtist} onChange={handleInputChange} />
          <Input mt={3} placeholder='Año' name='fYear' value={fYear} onChange={handleInputChange} />
          <Textarea mt={3} placeholder='Notas' name='fNotas' value={fNotas} onChange={handleInputChange}>
          </Textarea>
          <Input mt={3} placeholder='Url de alguna portada que te guste' name='fFrontImage' value={fFrontImage} onChange={handleInputChange} />
          <Input mt={3} placeholder='Url de alguna tapa del álbum que te guste' name='fBg' value={fBg} onChange={handleInputChange} />
          <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSave}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal> 
  )
}

PopupForm.defaultProps = {
  isOpen: false,
  onClose: () => {},
  background: '',
  title: '',
  artist: '',
  year: '',
  frontImage: '',
  notas: '',
  rating: ''
}

export default PopupForm
