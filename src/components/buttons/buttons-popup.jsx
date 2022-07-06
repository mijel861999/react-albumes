import React from 'react'
import { useSelector } from 'react-redux'
import { 
  Button,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import PopupFormAlbum from '../popups/popup-form-album'

const ButtonsPopup = ({ handleAddToList, album }) => {
  const { listActive } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } =  useDisclosure()


  return (    
    <>
      {
        (!!listActive) ? 
          <Box>
            <Button onClick={handleAddToList}>
              Agregar
            </Button>
          </Box>
        :
          <Box>
            <Button onClick={onOpen}>
              Editar
            </Button>
          </Box>
      }
      <PopupFormAlbum
        isOpen={isOpen}
        onClose={onClose}
        album={album} 
      />
    </>
  )
}

export default ButtonsPopup

