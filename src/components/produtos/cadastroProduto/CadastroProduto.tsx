import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';



function CadastroProduto() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
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
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
              });
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: "",
        descricao: ""
    })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        descricao: "",
        preco: 0,
        quantidade: 0,
        foto: "",
        data: "",
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if(id !== undefined){
            findByIdProduto(id)
        }
    } , [id])


    const getCategorias = async () => {
        await busca('/categorias', setCategorias, {
            headers: {
                'Authorization': token
        }
    })
    }

    const findByIdProduto = async (id: string) => {
        await buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
        }
    })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto atualizado com sucesso", {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
              });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto cadastrado com sucesso", {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
              });
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }



 
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}  id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.descricao}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Texto" name="descricao" multiline rows={5} variant="outlined" margin="normal" fullWidth />

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
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;