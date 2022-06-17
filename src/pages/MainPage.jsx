import { Box, IconButton, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/Card'
import { AddIcon } from '@chakra-ui/icons'
import PopupForm from '../components/popup-form'

const MainPage = () => {
  const { albumsList } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } =  useDisclosure()
  const dispatch = useDispatch()
  
  const handleCreateAlbum = () => {
    onOpen()
  }

  return(
    <Box p={4} w='100%' h='100vh'> 
      <SimpleGrid align='center' columns={[2, 3, 5]} gap={6}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            w='40px'
            h='40px'
            align='center'
            onClick={handleCreateAlbum}
            icon={ <AddIcon />}
          >
          </IconButton>
        </Box>
        {albumsList.map(album => (
          <Card
            key={album.title}
            album={album}
          />
        ))}
        <PopupForm 
          isOpen={isOpen}
          onClose={onClose}
          isForCreate={true}
        />
      </SimpleGrid>
    </Box>
  )
}

export default MainPage