import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Heading } from '@chakra-ui/react'
import { SetActiveList } from '../actions/albumes'
import defaultListImage from '../images/defaultListImage.png'

const ListItem = ({ lista }) => {
  const dispatch = useDispatch()
  
  const handleSetActiveList = () => {
    dispatch(SetActiveList(lista))
  }

  return (
    <Link
      to='/listas/listActive'
      w='100%'
    >
      <Box
        onClick={handleSetActiveList}
        key={lista.id}
        w='100%'
        h='97px'
        backgroundImage={lista.background ? lista.background : defaultListImage}
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
        <h2 fontSize='4xl' fontWeight='black' align='center'>{ lista.title }</h2>  
      </Box>
    </Link>
  ) 
}

export default ListItem
