import React, { useRef } from 'react'
import { Box, Heading, Text, GridItem } from '@chakra-ui/react'

const News = ({ title='Título', description='Esta es la descripción de la noticia ac puedes ver muchas cosas interesantes', link='https://www.google.com', newImage='https://i.ytimg.com/vi/E17UG60p1VY/maxresdefault.jpg' }) => {
  const linkRef = useRef(null)

  const handleRedirectToNew = (ref) => {
    ref.current.click()
  }
   
  return (    
    <GridItem align='center'>
      <Box
        w='300px'
        border='1px solid #464646'
        borderRadius='8px'
        _hover={{
          background: '#283a02'
        }}
        cursor='pointer' 
        onClick={() => handleRedirectToNew(linkRef)}
      > 
        <Box
          h='200px'
          w='100%'
          backgroundImage={newImage}
          backgroundPosition='center'
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          filter='auto'
          p={3}
          display='Flex'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
        </Box>
        <Box p={6}>
          <Heading>{ title }</Heading>
          <Text>
            { description }
          </Text>
        </Box> 
        <a
          href={link}
          ref={linkRef}
          target='_blank'
          style={{
            display: 'none' 
          }}
        ></a>
      </Box>
    </GridItem>
  )
}

export default News

