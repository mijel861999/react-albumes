import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'
import ListItem from '../components/listItem'

const ListasPage = () => {
  const { customLists } = useSelector(state => state.albumes)
  return (
    <Box>
      <Box>
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