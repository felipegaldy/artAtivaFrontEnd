import React, { useState, useEffect, ChangeEvent } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {Box, Paper} from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './CadastroUsuario.css';
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../services/Service";




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/home">
        Art Ativa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function CadastroUsuario() {

    const classes = useStyles();
    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<string>("");
    const [user, setUser] = useState<Usuario>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      dataNascimento: "",
    });

    const [userResult, setUserResult] = useState<Usuario>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      dataNascimento: "",
    });

    useEffect(() => {
      if (userResult.id != 0) {
        history("/login");
      }
    }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //Tenta executar o cadastro
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        alert("Usuário cadastrado com sucesso");

        //Se houver erro, pegue o Erro e retorna uma msg
      } catch (error) {
        console.log(`Error: ${error}`);

        //Pode modificar a msg de acordo com o erro
        alert("Usuário já existente");
      }
    } else if (confirmarSenha !== user.senha) {
      alert("As senhas não combinam."); // Mensagem que indica que as senham nao são iguai

      // Reinicia o campo de Confirmar Senha
    } else {
      alert("Insira no miníno 8 caracteres na senha."); // Mensagem que indica a quantidade minima de caracteres
      setUser({ ...user, senha: "" }); // Reinicia o campo de Senha
      setConfirmarSenha("");
    }
  }

  /*
    = : atribuição (valor = 9)
    == : op. aritmetico (valor == 9.0)
    === : op. idêntico (valor === 9.0)
*/

  return (
    <>
    <Paper elevation={3} className="paper-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>
          <form onSubmit={onSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  name="nome"
                  variant="outlined"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  variant="outlined"
                  required
                  fullWidth
                  id="usuario"
                  label="Usuario"
                  name="usuario"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={user.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  variant="outlined"
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="password"
                  id="senha"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={confirmarSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    confirmarSenhaHandle(e)
                  }
                  variant="outlined"
                  required
                  fullWidth
                  name="confrimaSenha"
                  label="Confirmar Senha"
                  type="password"
                  id="confirmarSenha"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  variant="outlined"
                  required
                  fullWidth
                  id="foto"
                  label="Foto"
                  name="foto"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.dataNascimento}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  variant="outlined"
                  required
                  fullWidth
                  id="dataNascimento"
                  label="Data de Nascimento"
                  name="dataNascimento"
                  type="date"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login">
                  Ja possui conta? Acessar
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Paper>
    </>
  );
}

export default CadastroUsuario;
