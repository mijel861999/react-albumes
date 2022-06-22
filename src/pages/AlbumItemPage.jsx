import { Box, Heading, SimpleGrid, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card'
import { AddIcon } from '@chakra-ui/icons'
import PopupList from '../components/popup-list'

const AlbumItemPage = () => {
  const { listActive } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } = useDisclosure()

  if(!listActive.id) {
    return <Box>No hay ninguna lista seleccionada</Box>
  }

  const handleAddAlbumToList = () => {
    onOpen()
  }

  return(
    <Box>
      <Box
        w='100%' 
        h='130px'
        backgroundImage={listActive.background}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
      >
      </Box>
      <Heading m={4} align='center'>{listActive.title}</Heading>
      <Box  p={4} w='100%'>
      <SimpleGrid w='100%' align='center' columns={[2, 3, 5]} gap={6}>
        <Box
          w='100%'
          display='flex' 
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            w='40px'
            h='40px'
            align='center'
            onClick={handleAddAlbumToList}
            icon={ <AddIcon />}
          >
          </IconButton>
        </Box> 
        {listActive.albums.map(album => (
          <Card
            key={album.title}
            album={album}
          />
        ))}
        <PopupList 
          isOpen={isOpen} 
          onClose={onClose}
        />
      </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AlbumItemPage