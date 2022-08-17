import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import './Home.css';
import Carrosel from "../../components/carrosel/Carousel";
import CardProduto from "../../components/cardproduto/CardProduto";
import { busca } from "../../services/Service";
import Produto from "../../models/Produto";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReduce";
import { Link } from "react-router-dom";


function Home() {

  const [produtos, setProduto] = useState<Produto[]>([]);
  const token = "Basic ZmVsaXBlMkBlbWFpbC5jb206MTIzNDU2Nzg5";
  // const token = useSelector<TokenState, TokenState["tokens"]>(
  //   (state) => state.tokens
  // );

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
            id={produto.id}
            /> 
        </Grid>
        ))}
        <div className="quemSomos">
          <div className="quemSomosTopo">
            <h1 className="titleQuemSomosHome">Quem Somos</h1>
            <h4 className="subTitleQuemSomosHome">Vem dar uma olhada na nossa equipe</h4>
            
            <button className="saibaMais"><Link to="/sobrenos" className="text-decorator-none cursor linkSaiba" >Saiba Mais</Link></button>
            
          </div>
          <div className="quemSomosBottom">
            <div className="quemSomosCard">
              <img src="https://avatars.githubusercontent.com/u/102499242?v=4" alt="" />
              <div className="cardBottomQuemSomos">
                <button className="saibaMaisBottom">Saiba Mais</button>
              </div>
            </div>
            <div className="quemSomosCard">
              <img src="https://avatars.githubusercontent.com/u/106316122?v=4" alt="" />
              <div className="cardBottomQuemSomos">
                <button className="saibaMaisBottom">Saiba Mais</button>
              </div>
            </div>
            <div className="quemSomosCard">
              <img src="https://avatars.githubusercontent.com/u/105821392?v=4" alt="" />
              <div className="cardBottomQuemSomos">
                <button className="saibaMaisBottom">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
        <div className="talvezVoceGoste talvezVoceGosteHome">
          <hr className="linha" />
          <div className="tituloInicial">Recomendados</div>
          <hr className="linha" />
        </div>
        <div className="produtosRecomendados produtosRecomendadosHome">
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
        </div>
      </Grid>
      
    </>
  );
}

export default Home;
