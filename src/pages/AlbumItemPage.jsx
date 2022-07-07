import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Heading, SimpleGrid, IconButton, useDisclosure, Text } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { DeleteList } from '../actions/albumes'
import Card from '../components/card'
import PopupList from '../components/popups/popup-list'

const AlbumItemPage = () => {
  const dispatch = useDispatch()
  const { listActive, albumsList } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { albumsIds } = listActive

  if(!listActive.id) {
    return <Box>No hay ninguna lista seleccionada</Box>
  }

  const handleAddAlbumToList = () => {
    onOpen()
  }

  const handleDeleteList = () => {
    dispatch(DeleteList())
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
      <Box w='100%' display='flex' align='center' justifyContent='center'>
        <Text
          fontSize='2xl'
          fontWeight='bold'
          m={4}
          align='center'
        >
          {listActive.title}
        </Text>
        <IconButton
          justifySelf='flex-end'
          m={4}
          color='white'
          background='red'
          justifySelf='end'
          onClick={handleDeleteList}
          icon={<DeleteIcon/>}
        />
      </Box>
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
          albumsList.filter(album => albumsIds.includes(album.id)).map(album => (
            <Card
              key={album.title}
              album={album}
              isForAction={false}
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
