import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Container, Heading, useDisclosure, Text } from '@chakra-ui/react'
import ListItem from '../components/listItem'
import PopupCreateList from '../components/popups/popup-create-list'
import Card from '../components/card'

const ListasPage = () => {
  const { customLists } = useSelector(state => state.albumes)
  const { isOpen, onOpen, onClose } =  useDisclosure()

  const AddList = () => {
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
        {
          (customLists.length===0) &&
            <Text
              fontSize='2xl'
              fontWeight='bold'
              m={4}
            >
              No hay listas
            </Text>
        }
      </Box>
      <PopupCreateList
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

export default ListasPage
