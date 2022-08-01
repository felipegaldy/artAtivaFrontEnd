import React from 'react'
import { Box, Button, FormHelperText, Input, InputLabel } from '@mui/material';
import { FormControl } from '@material-ui/core';

function Login() {
  return (
  <Box>
    <Box alignItems="center"
    justifyContent="center"
    width={200}
    height={200}
    border="solid 2px"
    margin-right="100px">
    <FormControl>
  <InputLabel htmlFor="my-input">Login</InputLabel>
  <Input id="login" aria-describedby="input de login"/>
  <InputLabel htmlFor="my-input">Senha
  </InputLabel>
  <Input id="senha" aria-describedby="input de senha"/>
    <Button>Logar</Button>
 </FormControl>
    </Box>
  </Box>
  )
}

export default Login