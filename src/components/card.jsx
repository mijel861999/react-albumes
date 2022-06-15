import React from 'react'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'
import PopUp from './popup'


const Card = ({ background, title, artist, year, frontImage, notas, rating }) => {
  const { isOpen, onOpen, onClose } =  useDisclosure()
  return (
    <Box
      align='center' 
      style={{ cursor: 'pointer'}}
      onClick={onOpen}
    >
      <Box
        w='97px'
        h='133px'
        backgroundImage={`url(${background})`}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        filter='auto'
        display='Flex'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <Heading as='h6' size='xs' align='center'>{ title }</Heading>
      </Box>
      <PopUp
        isOpen={isOpen}
        onClose={onClose}
        background={background}
        title={title}
        artist={artist}
        year={year}
        frontImage={frontImage}
        notas={notas}
        rating={rating}
      />
    </Box> 
  )
}

export default Card