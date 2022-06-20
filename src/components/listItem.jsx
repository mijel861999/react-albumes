import React from 'react'

import { Box, Heading, Container } from '@chakra-ui/react'
import Card from './card'

const ListItem = ({ lista }) => {
  return (
    <Box
      key={lista.id}
      w='100%'
      h='97px'
      backgroundImage={lista.background}
      backgroundPosition='center'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      filter='auto'
      display='Flex'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      cursor='pointer'
    >
      <Heading as='h6' fontWeight='black' size='xl' align='center'>{ lista.title }</Heading> 
    </Box>
  ) 
}

export default ListItem