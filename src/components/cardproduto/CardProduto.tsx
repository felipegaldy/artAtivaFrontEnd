import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './CardProduto.css';

function CardProduto() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://images-ext-1.discordapp.net/external/tOaOCs6COURxKFXdSfll6KBsoYEfijP_tiEqHm2lWiM/https/i.imgur.com/gUoTryU.jpg?width=621&height=621"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Produto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra
            nisi.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions" >
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Typography variant="body2" color="text.secondary" className="preco">
            R$ 100,00
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardProduto;