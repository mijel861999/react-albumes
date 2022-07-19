import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import LinkOptions from './linkOptions'

const OptionsList = () => {
  const [isActive, setActive] = useState('')

  return (
    <Box p={4} display='flex' alignItems='center' justifyContent='start'>
      <LinkOptions redirect='/' label='Discos' isActive={isActive} setActive={setActive} />
      <LinkOptions redirect='/tops' label='Tops' isActive={isActive} setActive={setActive} /> 
      <LinkOptions redirect='/listas' label='Listas' isActive={isActive} setActive={setActive} />
      <LinkOptions redirect='/news' label='News' isActive={isActive} setActive={setActive} />
    </Box>
  )
}

export default OptionsList
