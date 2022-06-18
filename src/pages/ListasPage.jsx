import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const ListasPage = () => {
  const { customLists } = useSelector(state => state.albumes)
  console.log(customLists)
  return (
    <Box p={4}>
      <div>
        {customLists.map(lista => (
          <div key={lista.id}>
            <h1>{lista.title}</h1>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default ListasPage