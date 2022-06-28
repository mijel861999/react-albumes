import { Box, Button, Container, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'
import ListItem from '../components/listItem'
import PopupCreateList from '../components/popups/popup-create-list.jsx'

const ListasPage = () => {
  const { customLists } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } =  useDisclosure()


  const AddList = () => {
    console.log('Agregar lista')
    onOpen()
  }

  return (
    <Box>
      <Box textAlign='center'>
        <Button
          onClick={AddList}
          m={4}>
         +
        </Button>
        {customLists.map(lista => (
          <ListItem
            key={lista.title}
            lista={lista}
          />
        ))}
      </Box>
      <PopupCreateList
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

export default ListasPage
