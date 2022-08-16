import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css';
import { Paper } from "@material-ui/core";
import Carrosel from "../../components/carrosel/Carousel";
import CardProduto from "../../components/cardproduto/CardProduto";
import { busca } from "../../services/Service";
import Produto from "../../models/Produto";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReduce";


function Home() {

  const [produtos, setProduto] = useState<Produto[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const getProdutos = async () => {
    //adicionar try catch
    await busca("/produtos", setProduto, {
    headers: {
      'Authorization':  token
    }
  });
}

React.useEffect(() => {
  getProdutos();
} , [produtos.length]);

  return (
    <>
    
      <Grid container spacing={3} columns={12} className="home-container">
        <Grid item xs={12}>
          <Carrosel/>
        </Grid>
        <Grid item xs={12} className="title-container">
          <hr className="linhaHome" /> 
          <Typography variant="h5" component="h1" className="title-produtos tituloInicialHome" >
                Destaques
          </Typography>
          <hr className="linhaHome" />
        </Grid>
        {produtos.map(produto => (
        <Grid item xs={3} key={produto.id}>
            <CardProduto 
            nome={produto.nome} 
            descricao={produto.descricao} 
            preco={produto.preco}
            imagem={produto.foto}
            /> 
        </Grid>
        ))}
      </Grid>
      
    </>
  );
}

export default Home;
