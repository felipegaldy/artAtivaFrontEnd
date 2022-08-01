import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import './Footer.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
        <AppBar position="static" className="top-footer">
        <Toolbar className="toolbar">
          <Box>
          <Typography variant="subtitle2" className='cop' align="center">© Copyright 2022. Art Ativa: Todos os direitos reservados.</Typography>
          </Box>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Footer;