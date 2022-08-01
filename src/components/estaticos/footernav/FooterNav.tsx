
import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './FooterNav.css';



export default function FooterNav() {

  return (
    <>
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
    <Grid alignItems="center" item xs={12}>
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
            Siga-nos nas redes sociais{" "}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a
            href="https://www.facebook.com/generationbrasil"
            target="_blank"
          >
            <FacebookIcon className="sociais" />
          </a>
          <a
            href="https://www.instagram.com/generationbrasil/"
            target="_blank"
          >
            <InstagramIcon className="sociais" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil/"
            target="_blank"
          >
            <LinkedInIcon className="sociais" />
          </a>
        </Box>
      </Box>
      </Grid>
      </Grid>
    </>
    );
}