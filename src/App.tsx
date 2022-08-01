import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import TopNavbar from './components/estaticos/topnavbar/TopNavbar';
import Footer from './components/estaticos/footer/Footer';
import FooterNav from './components/estaticos/footernav/FooterNav';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Home />
      <FooterNav />
      <Footer />
    </>

  );
}

export default App;
