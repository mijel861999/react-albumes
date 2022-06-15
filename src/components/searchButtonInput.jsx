import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, IconButton, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useForm } from '../hooks/useForm'

const SearchButtonInput = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, handleInputChange] = useForm({
    search: ''
  })

  const { search } = searchValue

  useEffect(() => {
    // TODO: implement search
  }, [search])

  return (
    <Box p={4} display='flex' alignItems='center' justifyContent='space-between'>
      <AnimatePresence> 
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Input
              placeholder='Search your album...'
              value={search}
              name='search'
              onChange={handleInputChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        icon={<SearchIcon />}
        ml={2}
      />
    </Box>
  )
}

export default SearchButtonInput