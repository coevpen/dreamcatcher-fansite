import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Members from './components/pages/Members';
import Discography from './components/pages/Discography';
import Links from './components/pages/Links';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <main className="content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/members' element={<Members/>} />
          <Route path='/discography' element={<Discography/>} />
          <Route path='/links' element={<Links/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
