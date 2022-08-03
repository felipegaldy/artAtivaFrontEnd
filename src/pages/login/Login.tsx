import React from "react";
import { Grid, Box, Button, Typography, TextField, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="grid-login-container"
      >

        <Box paddingX={20} className="login-box">
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="login-title"
            >
              Login
            </Typography>
            <TextField
              id="usuario"
              label="Digite seu email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/">
              <Button type="submit" variant="contained" color="primary" className="botao-login">
                Logar
              </Button>
              </Link>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2} className="text-cadastra-se">
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className=""
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Login;
