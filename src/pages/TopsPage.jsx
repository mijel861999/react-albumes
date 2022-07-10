import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Card from '../components/card.jsx'

const TopsPage = () => {
  const { albumsList } = useSelector(state => state.albumes)
  
  const orderAlbums = albumsList.sort((a, b) => b.rating - a.rating)

  return (
    <motion.div
      initial={{ y: '10%' }}
      animate={{ y: '0%' }}
    >
      <SimpleGrid
        w='100%'
        align='center'
        columns={[2, 3, 5]}
        gap={6}
      >
        {
          orderAlbums.map((album, index) => (
            <Box key={index}>
              <Text m={4} fontSize='3xl'>
                {index + 1}
              </Text>
              <Card 
                album={album}
                isForAction={false}
              />
            </Box> 
          ))
        }  
      </SimpleGrid>
    </motion.div>
  )
}

export default TopsPage
