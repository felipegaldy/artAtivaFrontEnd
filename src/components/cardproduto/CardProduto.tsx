import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './CardProduto.css';
import { Link } from "react-router-dom";


function CardProduto({nome, descricao, preco, imagem, id=0} : any) {
  
  return (
    <Card className="cardProdutoContainer">
      <CardActionArea className="cardTopo" >
        <div className="cardImagem">
          <img src={imagem ? imagem : "https://via.placeholder.com/150"} alt={nome} />
        </div>
        <CardContent className="cardDescricao" >
          <Typography variant="h6">
            {nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardBottom" >
      <Link to={`/produto/${id}`} className="text-decorator-none">
        <Button className="btnVerProduto">
          Ver
        </Button>
      </Link>
        <Typography variant="body2" color="text.secondary" className="preco">
            R${preco},00
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardProduto;