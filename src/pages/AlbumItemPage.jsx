import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  Box,
  Heading,
  SimpleGrid,
  IconButton,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { DeleteList, DeleteAlbumInList } from '../actions/albumes'
import Card from '../components/card'
import NewCard from '../components/new-card'
import PopupList from '../components/popups/popup-list'
import PopupCreateList from '../components/popups/popup-create-list'
import NewPopup from '../components/popups/new-popup'
import defaultListImage from '../images/defaultListImage.png'

const AlbumItemPage = () => {
  const dispatch = useDispatch()
  const { listActive, albumsList } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenToEdit, onOpen: onOpenToEdit, onClose: onCloseToEdit } = useDisclosure()
  const { isOpen: isOpenNewCard, onOpen: onOpenNewCard, onClose: onCloseNewCard } = useDisclosure()
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

  const handleOpenPopupForEdit = () => {
    onOpenToEdit()
  }

  const handleOpenNewCard = () => {
    onOpenNewCard()
  }

  const handleDeleteAlbumInList = () => {
    dispatch(DeleteAlbumInList())
    onCloseNewCard()
  }

  return(
    <motion.div
      initial={{ x: '10%' }}
      animate={{ x: '0%' }}
    >
      <Box
        w='100%' 
        h='130px'
        display='flex'
        justifyContent='end'
        alignItems='end'
        backgroundImage={listActive.background ? listActive.background : defaultListImage}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
      >
        <IconButton
          m={3}
          icon={<EditIcon />}
          onClick={handleOpenPopupForEdit}
        >
        </IconButton>
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
            <NewCard
              key={album.title}
              album={album}
              popup={
                <NewPopup 
                  isOpen={isOpenNewCard}
                  onClose={onCloseNewCard}
                  album={album} 
                  buttonTag='Eliminar'
                  action={handleDeleteAlbumInList}
                />
              }
              handleOpen={handleOpenNewCard}
            />
          ))
        }
        <PopupList 
          isOpen={isOpen} 
          onClose={onClose}
        />
        <PopupCreateList 
          isOpen={isOpenToEdit}
          onClose={onCloseToEdit}
          isForEdit={true}
        />
      </SimpleGrid>
      </Box>
    </motion.div>
  )
}

export default AlbumItemPage
