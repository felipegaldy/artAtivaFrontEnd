import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Button, Typography, TextField} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch} from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento:'',
        token: ''
      }
      )

      function updatedModel(e: ChangeEvent<HTMLInputElement>) {

          setUserLogin({
              ...userLogin,
              [e.target.name]: e.target.value
          })
      }

          useEffect(()=>{
            if(token !== ''){
             dispatch(addToken(token));  
              navigate('/home')
          }
          }, [token])

      async function onSubmit(e: ChangeEvent<HTMLFormElement>){
          e.preventDefault();
          try{
              await login(`/usuarios/logar`, userLogin, setToken)

              alert('Usuário logado com sucesso!');
          }catch(error){
              alert('Dados do usuário inconsistentes. Erro ao logar!');
          }
        }
      
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
          <form onSubmit={onSubmit}>
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
            value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Digite seu email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
            value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
         
              <Button type="submit" variant="contained" color="primary" className="botao-login">
                Logar
              </Button>
             
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

export default Login