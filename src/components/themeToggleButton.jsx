import React from 'react'
import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      mr={4}
      me={4}
      onClick={toggleColorMode}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
    ></IconButton>
  )
}

export default ThemeToggleButton