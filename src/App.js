import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import { VimotusProvider } from './context';
import data from './data/programs.json';


function App() {

  const vimotus = { data };

  return (
    <div className="vm-app">
      <VimotusProvider value={vimotus}>
        <Header />
        <Menu />
        <Hero />
        <div className="bg-light">
          <div className="container">
            <Programs />
          </div>
        </div>
        <About /> 
        <Info />       
        <Footer />
      </VimotusProvider>
    </div>
  );
}

export default App;
