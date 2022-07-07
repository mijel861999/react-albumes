import React from 'react'
import { useSelector } from 'react-redux'
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
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'
import Card from '../card'

const PopupList = ({ isOpen, onClose }) => {
  const [searchInput, handleInputChange] = useForm({
    searchValue: ''
  })
  const { albumsList } = useSelector(state => state.albumes)

  const { searchValue } = searchInput

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
              <Card
                key={index}
                album={album}
                isForAdd={true}
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

