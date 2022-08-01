import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import TopNavbar from './components/estaticos/topnavbar/TopNavbar';
import Footer from './components/estaticos/footer/Footer';
import FooterNav from './components/estaticos/footernav/FooterNav';

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <FooterNav />
      <Footer />
    </>

  );
}

export default App;
