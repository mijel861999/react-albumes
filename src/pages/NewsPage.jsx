import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import News from '../components/news'


const NewsPage = () => {
  return (
    <motion.div
      initial={{ y: '10%' }}
      animate={{ y: '0%' }}
    >
      <Box p={4} w='100%' h='100vh'>
        <SimpleGrid align='center' columns={[1, null, 2, 3]} gap={6}>
          <News /> 
          <News />
          <News />
          <News />
        </SimpleGrid>
      </Box>
    </motion.div> 
  )
}

export default NewsPage
