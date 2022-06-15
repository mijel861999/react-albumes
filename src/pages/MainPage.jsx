import { Box, IconButton, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/Card'
import { AddIcon } from '@chakra-ui/icons'

const albumes = [
  {
    title: 'Mr Morales and the big stepperes',
    artist: 'Kendick Lamar',
    year: '2020',
    bg: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
    frontImage: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
    notas: '',
    rating: 4,
  }
]

const MainPage = () => {
  const { albumsList } = useSelector(state => state.albumes)
  const dispatch = useDispatch()
  
  const handleCreateAlbum = () => {
    alert('Create album')
  }

  return(
    <Box p={4} w='100%' h='100vh'> 
      <SimpleGrid align='center' columns={[2, 3, 5]} gap={6}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            w='40px'
            h='40px'
            align='center'
            onClick={handleCreateAlbum}
            icon={ <AddIcon />}
          >
          </IconButton>
        </Box>
        {albumsList.map(album => (
          <Card
            key={album.title}
            background={album.bg}
            title={album.title}
            artist={album.artist}
            year={album.year}
            frontImage={album.frontImage}
            notas={album.notas}
            rating={album.rating}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default MainPage