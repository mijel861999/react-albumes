import React from 'react'
import { Box } from '@chakra-ui/react'
import ThemeToggleButton from './themeToggleButton'
import SearchButtonInput from './searchButtonInput'

const Navbar = () => {
  return (
    <Box p={4} display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center'>
        <ThemeToggleButton /> 
        <h1>DiscTracker</h1>
      </Box> 

      <SearchButtonInput />
    </Box>
  )
}

export default Navbar
