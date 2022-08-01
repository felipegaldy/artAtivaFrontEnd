import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import TopNavbar from './components/estaticos/topnavbar/TopNavbar';
import Footer from './components/estaticos/footer/Footer';
import FooterNav from './components/estaticos/footernav/FooterNav';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './pages/sobrenos/SobreNos';

function App() {
  return (
    <>
     <Router>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sobreNos" element={<SobreNos/>}/>
      
      </Routes>
      <FooterNav />
    </Router>
      
      
      <Footer />
    </>

  );
}

export default App;
