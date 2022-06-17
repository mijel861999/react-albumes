import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { StarIcon } from '@chakra-ui/icons'

const Rating = ({ ratingValue, setRatingValue }) => {
  const handleClick = (value) => {
    setRatingValue(value)
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' mt={3}>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <IconButton m={1} icon={<StarIcon />} onClick={() => handleClick(1)} /> 
          <h1>1</h1>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <IconButton m={1} icon={<StarIcon />} onClick={() => handleClick(2)}/> 
          <h1>2</h1>
        </Box> 
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <IconButton m={1} icon={<StarIcon />} onClick={() => handleClick(3)}/> 
          <h1>3</h1>
        </Box> 
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <IconButton m={1} icon={<StarIcon />} onClick={() => handleClick(4)}/> 
          <h1>4</h1>
        </Box> 
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <IconButton m={1} icon={<StarIcon />} onClick={() => handleClick(5)}/> 
          <h1>5</h1>
        </Box>
      </Box>
      {ratingValue && (
        <h1>{ratingValue}</h1>)}
    </Box> 
  )
}

export default Rating
