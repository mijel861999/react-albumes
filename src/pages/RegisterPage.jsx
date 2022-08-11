import React from 'react'
import { motion } from 'framer-motion'
import { Box, Button, Input, FormControl, FormLabel, FormHelperText, Text } from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [loginInputs, handleInputChange] = useForm({
    names: '',
    email: '',
    password: '',
    password2: ''
  })

  const { names, email, password, password2 } = loginInputs

  const handleRegister = () => {
    console.log(names, email, password, password2) 
  }

  return (
    <Box w='100%' h='80vh' display='flex' alignItems='center' justifyContent='center'>
      <FormControl w='300px' display='flex' flexDirection='column'>
        <Text as='h1' fontSize='3xl' align='center'>Register</Text>
        <FormLabel>Names</FormLabel>
        <Input
          type='text'
          placeholder='Juanito...'
          value={names}
          name='names'
          onChange={handleInputChange}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          placeholder='example@site.com'
          value={email}
          name='email'
          onChange={handleInputChange}
        />
        <FormLabel mt={4}>Contraseña</FormLabel>
        <Input
          type='password'
          placeholder='***********'
          value={password}
          name='password'
          onChange={handleInputChange}
        />
        <FormLabel mt={4}>Repite tu contraseña</FormLabel>
        <Input
          type='password'
          placeholder='***********'
          value={password2}
          name='password2'
          onChange={handleInputChange}
        />
        <FormHelperText mb={4}>We'll never share your password.</FormHelperText>
        <Button onClick={handleRegister}>Entrar</Button>
        <Link to='/login' cursor='pointer'>Ingresa</Link>
      </FormControl> 
    </Box>
  )
}

export default RegisterPage
