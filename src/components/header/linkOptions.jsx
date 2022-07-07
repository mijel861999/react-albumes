import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, useColorMode } from '@chakra-ui/react'
import { SetCleanActiveList } from '../../actions/albumes'

const LinkOptions = ({ redirect, label, isActive, setActive}) => {
  const boxLink = useRef(null)
  const { colorMode } = useColorMode()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(SetCleanActiveList())
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
