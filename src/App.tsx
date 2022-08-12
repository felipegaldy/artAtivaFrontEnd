import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './pages/sobrenos/SobreNos';
import CadastroUsuario from './pages/cadastrousuario/CadastroUsuario';
import { Provider } from 'react-redux';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import store from './store/store';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';

function App() {
  return (
    <>
    <Provider store={store}>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
        <Route path="/categorias" element={<ListaCategoria />} />
        <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
        <Route path="/cadastrocategoria/:id" element={<CadastroCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        <Route path="/produtos" element={<ListaProduto />} />
      </Routes>
      <Footer/>
    </Router>
      
    </Provider>
    </>

  );
}

export default App;
