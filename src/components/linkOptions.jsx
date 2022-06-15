import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Box, useColorMode } from '@chakra-ui/react'

const LinkOptions = ({ redirect, label, isActive, setActive}) => {
  const boxLink = useRef(null)
  const { colorMode } = useColorMode()

  const handleClick = (e) => {
    e.preventDefault()
    setActive(label)
    boxLink.current.click()
  }

  return (
    <Box
      onClick={handleClick}
      m={3} 
      p={3}
      borderRadius={5}
      boxShadow='md'
      rounded='md'
      borderBottom={ (isActive === label) ? `5px solid ${(colorMode === 'dark') ? 'white': 'black'}` : '2px solid transparent' }
      style={{ cursor: 'pointer' }}
    >
      <Link 
        ref={boxLink}
        to={redirect}
      >
        {label}
      </Link>
    </Box>
  )
}

export default LinkOptions