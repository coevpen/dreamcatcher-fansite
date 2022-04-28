import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Members from './components/pages/Members';
import Discography from './components/pages/Discography';
import Links from './components/pages/Links';

function App() {
  const [pageSelected, setPageSelected] = useState("Home");

  const renderPage = () => {
    switch(pageSelected){
      case "Home":
        return <Home/>;
      case "Members":
        return <Members/>;
      case "Discography":
        return <Discography/>;
      case "Links":
        return <Links/>;
      default:
        return null;
    }

  }


  return (
    <div className="App">
      <Header />
      <Navbar
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <main>
        {renderPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
