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
            <Typography className="title">
                <WhatsAppIcon className="iconeWhats" /> Fale conosco via whatsapp
            </Typography>
          </Box>
          <Box>
            <Button color="inherit"><a href="/login"> Login</a></Button> | <Button color="inherit">Cadastrar</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopNavbar;
