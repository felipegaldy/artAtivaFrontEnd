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
            <Typography variant="h6" className="text-center">
              Comprar<br></br>
              R$29,99
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <Box>
          <img className="img-produto" src="https://i.imgur.com/gUoTryU.jpeg" alt="Bracelete ancora"  />
          </Box>
          <Typography variant="h6" className="text-center">
            Comprar <br></br>
            R$18,90
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <Box>
          <img className="img-produto" src="https://img.elo7.com.br/product/main/403865B/brinco-ceramica-pena-de-arara-brinco-pintado-a-mao.jpg" alt="Brinco de pena" />
          </Box>
          <Typography variant="h6" className="text-center">
            Comprar <br></br>
            R$ 9,99
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} className="card-produto">
          <Box>
          <img className="img-produto" src="https://img.ltwebstatic.com/images3_pi/2022/06/13/1655089399df83555c8d6146e7845a42888884268b.jpg" alt="Chaveiro de miçanga" />
          </Box>
          <Typography variant="h6" className="text-center">
            Comprar<br></br>
            R$ 5,99
            </Typography>        
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
