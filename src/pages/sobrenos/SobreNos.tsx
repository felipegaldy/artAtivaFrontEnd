import React from "react";
import { Grid, Box, Button, Typography, TextField, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./SobreNos.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function SobreNos() {
  return (
    <>
      <Grid container spacing={3} columns={12} className="sobrenos-container">
        <Grid item xs={12} className="title-container">
          <hr></hr>
          <Typography variant="h4" component="h1" className="title-sobrenos">
            Sobre nós
          </Typography>
          <hr></hr>
        </Grid>
        <Box className="card-fulano">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Fulano
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
                cachacis, eu reclamis.Si u mundo tá muito paradis? Toma um mé
                que o mundo vai girarzis!Paisis, filhis, espiritis santis.Tá
                deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </Typography>
              <Box className="redessociais">
                <InstagramIcon className="footer-icon redes-icon" />
                <FacebookIcon className="footer-icon redes-icon" />
                <LinkedInIcon className="footer-icon redes-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="card-fulano2">
          <img
            src="https://avatars.githubusercontent.com/u/99551212?v=4"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Fulano
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
                cachacis, eu reclamis.Si u mundo tá muito paradis? Toma um mé
                que o mundo vai girarzis!Paisis, filhis, espiritis santis.Tá
                deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </Typography>
              <Box className="redessociais">
                <InstagramIcon className="footer-icon redes-icon" />
                <FacebookIcon className="footer-icon redes-icon" />
                <LinkedInIcon className="footer-icon redes-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default SobreNos;
