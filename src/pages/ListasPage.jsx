import { Box, Button, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'
import ListItem from '../components/listItem'

const ListasPage = () => {
  const { customLists } = useSelector(state => state.albumes)

  const AddList = () => {
    console.log('Agregar lista')
  }

  return (
    <Box>
      <Box textAlign='center'>
        <Button
          onClick={AddList}
          m={2}>
         +
        </Button>
        {customLists.map(lista => (
          <ListItem
            key={lista.id}
            lista={lista}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ListasPage