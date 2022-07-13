import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'

import { SetActiveAlbum } from '../actions/albumes'
import PopUp from '../components/popups/popup'
import PopUpView from '../components/popups/poup-view'
import DefaultImage from '../images/default.png'

const NewCard = ({ album, popup, handleOpen }) => {
  const dispatch = useDispatch()
  console.log(popup)
  console.log(handleOpen)

  return (
    <Box
      align='center' 
      style={{ cursor: 'pointer'}} 
      onClick={handleOpen}
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
      {
        popup
      } 
    </Box> 
  )
}

export default NewCard

