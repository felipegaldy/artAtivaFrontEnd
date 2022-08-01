import React from 'react'
import { Box, FormHelperText, Input, InputLabel } from '@mui/material';
import { FormControl } from '@material-ui/core';

function Login() {
  return (
  <Box>
    <Box>
    <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
    </Box>
  </Box>
  )
}

export default Login