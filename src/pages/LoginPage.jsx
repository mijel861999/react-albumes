import React from 'react'

import { motion } from 'framer-motion'
import { Box, Button, useColorMode, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import Form from '../components/Form'
import CenterContainer from '../components/layouts/center-container'


const LoginPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <CenterContainer>
      <Form />
    </CenterContainer>
  )
}

export default LoginPage