import React from 'react'
import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
		  <motion.div
				style={{ display: 'inline-block' }}
				key={ useColorModeValue('light', 'dark') }
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1 }}
			>
        <IconButton
          mr={4}
          me={4}
          onClick={toggleColorMode}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
