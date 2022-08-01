import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import './TopNavbar.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Box } from '@mui/material';


function TopNavbar() {
  return (
    <>
      <AppBar position="static" className="top-nav">
        <Toolbar className="toolbar">
          <Box>  
            <Typography variant="h6" className="title">
                <WhatsAppIcon className="iconeWhats" /> Fale conosco via whatsapp
            </Typography>
          </Box>
          <Box>
            <Button color="inherit">Login</Button> | <Button color="inherit">Cadastrar</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopNavbar;
