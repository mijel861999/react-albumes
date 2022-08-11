import React from 'react'
import { motion } from 'framer-motion'
import { Box, Button, Input, FormControl, FormLabel , FormHelperText, Text } from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { StartLogin } from '../actions/auth'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [loginInputs, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = loginInputs

  const handleLogin = () => {
    console.log(email, password) 
    dispatch(StartLogin())
  }

  return (
    <Box w='100%' h='80vh' display='flex' alignItems='center' justifyContent='center'>
      <FormControl w='300px' display='flex' flexDirection='column'>
        <Text as='h1' fontSize='3xl' align='center'>Login</Text>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          placeholder='example@site.com'
          value={email}
          name='email' onChange={handleInputChange} />
        <FormLabel mt={4}>Contraseña</FormLabel>
        <Input
          type='password'
          placeholder='***********'
          value={password}
          name='password'
          onChange={handleInputChange}
        />
        <FormHelperText mb={4}>We'll never share your password.</FormHelperText>
        <Button onClick={handleLogin}>Entrar</Button>
        <Link to='/register' cursor='pointer' hover={{
          textDecoratin: 'underline' 
        }}>Registrate</Link>
      </FormControl> 
    </Box>
  )
}

export default LoginPage
