import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="navbar-pai">
        <Toolbar className="navbar-tool">
          <Box className="logo">
          <Typography className="" variant="h5" noWrap>
            LOGO
          </Typography>
          </Box>
          <Box className="box2">
          <IconButton aria-label="search" color="inherit">
            <SearchIcon className="icones"  fontSize="large" />
          </IconButton>
            <PersonIcon className="icones" fontSize="large" color="primary" />
            <ShoppingCartIcon className="icones" fontSize="large" color="primary" />
          </Box>
        </Toolbar>
        <Box>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
