import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./FooterNav.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";

export default function FooterNav() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={4}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Contatos
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <p>
                <EmailIcon className="sociais" /> contato@artativa.com.br
              </p>
              <p>
                <PhoneIcon className="sociais" /> (11) 94002-8922
              </p>
              <p>(Ligue ou mande uma mensagem pelo Whatsapp)</p>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={4}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Formas de Pagamento
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <p>Parcelamentos em até 12x nos cartões de crédito</p>
            </Box>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className="textos"
            >
              Politicas de entrega
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <p>Formas de envio</p>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <p>Devolucao</p>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={4}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Receba nossas notícias
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <Button variant="contained">Receber</Button>
            </Box>
          </Box>
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className="textos"
            >
              Siga-nos nas redes sociais{" "}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a
              href="https://www.facebook.com/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="redes" />
            </a>
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="redes" />
            </a>
            <a
              href="https://www.linkedin.com/school/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="redes" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
