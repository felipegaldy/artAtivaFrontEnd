import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css';
import { Paper } from "@material-ui/core";
import Carrosel from "../../components/carrosel/Carousel";
import CardProduto from "../../components/cardproduto/CardProduto";


function Home() {
  return (
    <>
    
      <Grid container spacing={3} columns={12} className="home-container">
        <Grid item xs={12}>
          <Carrosel/>
        </Grid>
        <Grid item xs={12} className="title-container">
          <hr /> 
          <Typography variant="h5" component="h1" className="title-produtos" >
                Quero levar para casa
          </Typography>
          <hr />
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
      </Grid>
      
    </>
  );
}

export default Home;
