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
import { useDispatch } from 'react-redux'
import { EditAlbum, StartAddAlbum } from '../actions/albumes'


const PopupForm = ({ isOpen, onClose, album, isForCreate }) => {
  const dispatch = useDispatch()
  const [inputsValues, handleInputChange, reset] = useForm({
    fTitle: album.title,
    fArtist: album.artist,
    fYear: album.year,
    fBg: album.bg,
    fFrontImage: album.frontImage,
    fNotas: album.notas,
    fRating: album.rating
  })


  const { fTitle, fArtist, fYear, fBg, fFrontImage, fNotas, fRating } = inputsValues 
  const [ratingValue, setRatingValue] = useState(fRating)

  const handleSave = () => {
    dispatch(EditAlbum({
      id: album.id,
      title: fTitle,
      artist: fArtist,
      year: fYear,
      bg: fBg,
      frontImage: fFrontImage,
      notas: fNotas,
      rating: ratingValue
    }))
    onClose()
  }
  
  const handleCreate = () => {
    dispatch(StartAddAlbum({
      title: fTitle,
      artist: fArtist,
      year: fYear,
      bg: fBg,
      frontImage: fFrontImage,
      notas: fNotas,
      rating: ratingValue,
    }))
    onClose()
    reset()
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
          <Input mt={3} placeholder='Artista' name='fArtist' value={fArtist} onChange={handleInputChange} />
          <Input mt={3} placeholder='Año' name='fYear' value={fYear} onChange={handleInputChange} />
          <Textarea mt={3} placeholder='Notas' name='fNotas' value={fNotas} onChange={handleInputChange}>
          </Textarea>
          <Input mt={3} placeholder='Url de alguna portada que te guste' name='fFrontImage' value={fFrontImage} onChange={handleInputChange} />
          <Input mt={3} placeholder='Url de alguna tapa del álbum que te guste' name='fBg' value={fBg} onChange={handleInputChange} />
          <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        </ModalBody>
        <ModalFooter>
          {(isForCreate) ?
            (<Button onClick={handleCreate}>Crear</Button>)
            :
            (<Button onClick={handleSave}>Guardar</Button>)
          } 
        </ModalFooter>
      </ModalContent>
    </Modal> 
  )
}

PopupForm.defaultProps = {
  isOpen: false,
  onClose: () => {},
  album: {
    bg: '',
    title: '',
    artist: '',
    year: '',
    frontImage: '',
    notas: '',
    rating: ''
  },
  isForCreate: false
}

export default PopupForm
