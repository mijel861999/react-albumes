import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const AlbumItemPage = () => {
  const { listActive } = useSelector(state => state.albumes)

  if(!listActive.id) {
    return <Box>No hay ninguna lista seleccionada</Box>
  }

  return(
    <Box>{listActive.title}</Box>
  )
}

export default AlbumItemPage