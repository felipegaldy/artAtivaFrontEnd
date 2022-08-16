import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './CardProduto.css';

function CardProduto({nome, descricao, preco, imagem} : any) {
  return (
    <Card className="cardProdutoContainer">
      <CardActionArea className="cardTopo" >
        <div className="cardImagem">
          <img src={imagem ? imagem : "https://via.placeholder.com/150"} alt={nome} />
        </div>
        <CardContent className="cardDescricao">
          <Typography  variant="h5">
            {nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardBottom" >
        <Button size="small" color="primary">
          Ver
        </Button>
        <Typography variant="body2" color="text.secondary" className="preco">
            R${preco},00
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardProduto;