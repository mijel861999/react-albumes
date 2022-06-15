import { Box, Flex, Container } from '@chakra-ui/react'
import React from 'react'

const CenterContainer = ({ children }) => {
  return (
    <Container>
      <Flex minWidth='max-content'alignItems='center' justifyContent='center' h='calc(100vh)'>
        {children}
      </Flex>
    </Container>
  )
}

export default CenterContainer