import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Programs from './components/Programs';

function App() {
  return (
    <div className="vm-app">
      <Header />
      <Menu />
      <Hero />
      <div className="bg-light">
        <div className="container">
          <Programs />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
