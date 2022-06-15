import { Box, Button, useColorMode, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react'


const Form = () => {
  return (
    <FormControl
      p={6}
      w='300px'
      borderRadius='md'
    >
      <FormLabel>Email Address</FormLabel>
      <Input id='email' type='email' />
      <FormHelperText>We never share you an email</FormHelperText>
    </FormControl>
  )
}

export default Form