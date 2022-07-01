import { Box, Heading, SimpleGrid, IconButton, useDisclosure, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card'
import { AddIcon } from '@chakra-ui/icons'
import PopupList from '../components/popup-list'

const AlbumItemPage = () => {
  const { listActive, albumsList } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { albumsListTitles } = listActive

  if(!listActive.id) {
    return <Box>No hay ninguna lista seleccionada</Box>
  }

  const handleAddAlbumToList = () => {
    onOpen()
  }

  useEffect(() => {
    console.log(listActive.albumsListTitles)
  }, [listActive.albumsListTitles])

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
      <Text fontSize='2xl' fontWeight='bold' m={4} align='center'>{listActive.title}</Text>
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
        {
          albumsList.filter(album => albumsListTitles.includes(album.title)).map(album => (
            <Card
              key={album.title}
              album={album}
            />
          ))
        }
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
