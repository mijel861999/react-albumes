import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'
import PopUp from './popup'
import { SetActiveAlbum } from '../actions/albumes'


const Card = ({ background, title, artist, year, frontImage, notas, rating, album }) => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } =  useDisclosure()
  const handleOpenCard = () => {
    dispatch(SetActiveAlbum(album))
    onOpen()
  }

  return (
    <Box
      align='center' 
      style={{ cursor: 'pointer'}}
      onClick={handleOpenCard}
    >
      <Box
        w='97px'
        h='133px'
        backgroundImage={`url(${background})`}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        filter='auto'
        display='Flex'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <Heading as='h6' size='xs' align='center'>{ title }</Heading>
      </Box>
      <PopUp
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
    </Box> 
  )
}

export default Card