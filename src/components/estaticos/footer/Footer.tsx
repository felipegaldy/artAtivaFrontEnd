import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Footer.css"; 

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="footer"
      >
        <Grid className="footer-box">
          <Box className="contatos-box">
            <Typography variant="h6" className="footer-title">
              Contatos
            </Typography>
            <Typography variant="body1" className="footer-text">
              <EmailIcon className="footer-icon" /> contato@artativa.com.br
            </Typography>
            <Typography variant="body1" className="footer-text">
              <PhoneIcon className="footer-icon" /> (11) 94002-8922
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="footer-subtext"
            >
              (Ligue ou mande uma mensagem pelo Whatsapp)
            </Typography>
          </Box>
          <Box className="pagamentos-envios-box">
            <Box className="pagamentos-box">
              <Typography variant="h6" className="footer-title">
                Formas de Pagamento
              </Typography>
              <Typography variant="body1" className="footer-text">
                Parcelamentos em até 12x nos cartões de crédito
              </Typography>
            </Box>
            <Box className="envios-box">
              <Typography variant="h6" className="footer-title">
                Politicas de entrega
              </Typography>
              <Typography variant="body1" className="footer-text">
                <LocalShippingIcon className="footer-icon" /> Formas de envio
              </Typography>
              <Typography variant="body1" className="footer-text">
                <ExitToAppIcon className="footer-icon" /> Devolução
              </Typography>
            </Box>
          </Box>
          <Box className="assine-sociais-box">
            <Box className="assine-box">
              <Typography variant="h6" className="footer-title">
                Receba nossas notícias
              </Typography>
              <div className="assine">
                <input type="email" placeholder="Digite seu email" className="inputAssine" />
                <button>
                  <ArrowForwardIcon className="iconButton" />
                </button>
              </div>
            </Box>
            <Box className="redes-box">
              <Typography variant="h6" className="footer-title">
                Siga-nos nas redes sociais
              </Typography>
              <Box className="redes-icones-box">

                  <InstagramIcon className="footer-icon redes-icon" />


                  <FacebookIcon className="footer-icon redes-icon" />


                  <LinkedInIcon className="footer-icon redes-icon" />

                </Box>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box className="footer-copy">
            <Typography variant="subtitle2" className="cop" align="center">
              © Copyright 2022. Art Ativa: Todos os direitos reservados.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
