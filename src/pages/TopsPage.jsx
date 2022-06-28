import React from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Card from '../components/card.jsx'

const TopsPage = () => {
  const { albumsList } = useSelector(state => state.albumes)
  
  const orderAlbums = albumsList.sort((a, b) => b.rating - a.rating)

  return (
    <SimpleGrid
      w='100%'
      align='center'
      columns={[2, 3, 5]}
      gap={6}
    >
      {
        orderAlbums.map((album, index) => (
          <Box>
            <Text m={4} fontSize='3xl'>
              {index + 1}
            </Text>
            <Card 
              key={album.title} 
              album={album}
            />
          </Box> 
        ))
      }  
    </SimpleGrid>
  )
}

export default TopsPage
