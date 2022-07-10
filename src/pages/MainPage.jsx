import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, IconButton, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import PopupFormAlbum from '../components/popups/popup-form-album'

const MainPage = () => {
  const { albumsList } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } =  useDisclosure()
  const dispatch = useDispatch()
  
  const handleCreateAlbum = () => {
    onOpen()
  }

  return(
    <motion.div
      initial={{ y: '10%' }}
      animate={{ y: '0%' }}
    >
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
          <PopupFormAlbum
            isOpen={isOpen}
            onClose={onClose}
            isForCreate={true}
          />
        </SimpleGrid>
      </Box>
    </motion.div>
  )
}

export default MainPage
