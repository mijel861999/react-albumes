import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'

import { SetActiveAlbum } from '../actions/albumes'
import PopUp from '../components/popups/popup'
import DefaultImage from '../images/default.png'

const Card = ({ album, isForAction = true }) => {
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
        backgroundImage={(album.bg.length > 1) ? `url(${ album.bg })` : DefaultImage}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        filter='auto'
        p={3}
        display='Flex'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <h2 fontSize='12px' size='xs' align='center'>{ album.title }</h2>
      </Box>
      <PopUp
        isOpen={isOpen}
        onClose={onClose}
        album={album} 
        isForAction={isForAction}
      />
    </Box> 
  )
}

export default Card
