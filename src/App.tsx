import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './pages/sobrenos/SobreNos';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sobreNos" element={<SobreNos/>}/>
      </Routes>
      <Footer/>
    </Router>
      
      
    </>

  );
}

export default App;
