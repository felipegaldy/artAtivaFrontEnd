import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroProduto.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { busca, buscaId, post, put } from "../../../services/Service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReduce";
import { Box, Paper } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/home">Art Ativa</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CadastroProduto() {
  const classes = useStyles();
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    quantidade: 0,
    foto: "",
    data: "",
    categoria: null,
  });

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
    getCategorias();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  const getCategorias = async () => {
    await busca("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  };

  const findByIdProduto = async (id: string) => {
    await buscaId(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  };

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/produtos`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto atualizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      post(`/produtos`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/produtos");
  }

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
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedProduto(e)
                    }
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    name="nome"
                    margin="normal"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedProduto(e)
                    }
                    id="descricao"
                    label="Descrição"
                    name="descricao"
                    multiline
                    rows={5}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                    {/* preço */}
                </Grid>
                <Grid item xs={6}>
                    {/* quantidade */}
                </Grid>
                <Grid item xs={12}>
                    {/* foto */}
                </Grid>
              </Grid>
              <FormControl  >
                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit} >
                        Cadastrar
                    </Button>
                </FormControl>
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
export default CadastroProduto;
