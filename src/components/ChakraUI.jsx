import React from 'react'

const ChakraUI = () => {
  return (
    <div>
      <Box
        as={motion.div}
        height='40px'
        width='40px'
        bg='orange.500'
        drag='x'
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition='0.5s linear'
      />
      <Box
        backgroundColor='tomato'
        m={2}
        p={2}
      >
        Tomato
      </Box>
      <Box
        backgroundColor='tomato'
        maxW='960px'
        mx='auto'
      />
      <Box
        backgroundColor='tomato'
        m={[2, 3]}
      />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        background='brand.700'
      >
        Box with flex box
      </Box>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark': 'Light'}</Button>
      <Button variant='outline'>Button</Button>
      <Button variant='ghost'>Hola</Button>
    </div>
  )
}

export default ChakraUI