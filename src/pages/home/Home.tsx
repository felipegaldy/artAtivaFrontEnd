import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css';
import { Paper } from "@material-ui/core";


function Home() {
  return (
    <>
      <Grid        
      container
      direction="row"
      justifyContent="center"
      alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <img src="https://i.imgur.com/MRhYAHD.png" alt="" />
          </Box>
        </Grid>
        <Box>
            <Typography>
              <h1>Quero levar para casa</h1>
            </Typography>
          </Box>
        <Grid container spacing={3} className="container-produtos">
        <Grid item xs={12} sm={3} className="card-produto">
          <Box>
          <img className="img-produto" src="https://images-ext-1.discordapp.net/external/IhO-E-_oJfwgGbJGyOsyRgxXfXZ6scXUnLUVsLkV-QE/https/i.imgur.com/336HGcz.png?width=627&height=621"  alt="" />
          </Box>
          <Box>
            <Typography variant="h6">
              Comprar
              R$29,99
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <Box>
          <img className="img-produto" src="https://i.imgur.com/gUoTryU.jpeg" alt="Bracelete ancora"  />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <h1>ola mundo</h1>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <h1>ola mundo</h1>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
