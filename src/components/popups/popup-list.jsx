import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  Modal,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  Text,
  SimpleGrid,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'
import Card from '../card'
import NewPopup from '../popups/new-popup'
import NewCard from '../new-card'
import { AddAlbumToList } from '../../actions/albumes'

const PopupList = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()
  const [searchInput, handleInputChange] = useForm({
    searchValue: ''
  })
  const { albumsList } = useSelector(state => state.albumes)

  const { searchValue } = searchInput
  const { isOpen: isOpenPopup, onOpen: onOpenPopup, onClose: onClosePopup } = useDisclosure()

  const handleAddAlbumToList = () => {
    dispatch(AddAlbumToList())
    onClosePopup()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
     <ModalOverlay /> 
     <ModalContent>
      <ModalHeader>
        <Text>Busca tu album para esta lista</Text>
      </ModalHeader>
      <ModalCloseButton/>
      <ModalBody>
        <Input
          placeholder='Busca tu album'
          name='searchValue'
          value={searchValue}
          onChange={handleInputChange}
        />
        <SimpleGrid m={6} columns={[2, 2]} gap={5}>
          {
            albumsList.filter( album => album.title.includes(searchValue)).map((album, index) => (
              <NewCard
                key={index}
                album={album}
                popup={<NewPopup
                  isOpen={isOpenPopup} 
                  onClose={onClosePopup}  
                  album={album}
                  buttonTag='Agregar'
                  action={handleAddAlbumToList}
                />}
                handleOpen={onOpenPopup}
              />
            ))
          }
        </SimpleGrid>
      </ModalBody>
     </ModalContent>
    </Modal>
  )
}

export default PopupList

