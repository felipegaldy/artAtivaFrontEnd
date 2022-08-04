import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: `25px`,
  border: `1px solid ${theme.palette.grey[800]}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  return (
    <>
      <AppBar position="static"  className="top-app-bar-container">
        <Toolbar className="top-toolbar">
          <Box>
            <Button className="texto-whats botoes-top">
              <WhatsAppIcon className="iconeWhats" /> Fale conosco via whatsapp
            </Button>
          </Box>
          <Box>
            <Link to="/login" className="text-decorator-none cursor">
            <Button className="botoes-top" color="inherit">
              Login
            </Button>
            </Link>{" "}
            |{" "}
            <Button className="botoes-top" color="inherit">
              Cadastrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* PARTE 2 DO HEADER COMEÇA AQUI*/}
      <AppBar position="static" className="app-bar-container" color="inherit">
        <Toolbar className="header-toolbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>
          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/*icones de login e shopcart */}
          <PersonIcon className="icones" />
          <ShoppingCartIcon className="icones" />
        </Toolbar>
        <Box className="box-botoes-sobrenos-contato">
            <Link to="/sobrenos" className="text-decorator-none cursor">
            <Button className="botoes-top botoes-sobrenos-contato" variant="text" >
              Quem somos
            </Button>
            </Link>{" "}
            |{" "}
            <Button className="botoes-top botoes-sobrenos-contato" color="inherit">
              Contato
            </Button>
          </Box>
        <Box className="nav-botoes">
          <Button variant="text" className="botao-nav">Roupas</Button>
          <Button variant="text" className="botao-nav">Decoração</Button>
          <Button variant="text" className="botao-nav">Destaques</Button>
          <Button variant="text" className="botao-nav">Para Casa</Button>
          <Button variant="text" className="botao-nav">Presentes</Button>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
