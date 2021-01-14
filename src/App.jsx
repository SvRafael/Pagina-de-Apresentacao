import logo from './logo.svg';
import React from 'react'
import './App.css';

import Navbar from './components/header/Navbar'
import Inicio from './components/inicio/Inicio'
import Sobre from './components/sobre/Sobre'
import Conhecimento from './components/conhecimentos/Conhecimentos'
import Qualidade from './components/qualidades/Qualidades'
import Experiencia from './components/experiencias/Experiencias'
import FooterPage from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Inicio></Inicio>
      <div class="section-hr" id="Sobre">
          <p>Sobre</p><hr></hr>
      </div>      
      <Sobre></Sobre>
      <div class="section-hr" id="Conhecimentos">
          <p>Conhecimentos</p><hr></hr>
      </div>      
      <Conhecimento></Conhecimento>
      <div class="section-hr" id="Qualidades">
          <p>Qualidades</p><hr></hr>
      </div>      
      <Qualidade></Qualidade>
      <div class="section-hr" id="Experiencias">
          <p>Experiências</p><hr></hr>
      </div>    
      <Experiencia></Experiencia>
      <footer>
      <FooterPage></FooterPage>
      </footer> 
      {/* <Experiencia></Experiencia>  */}
    </div>
  );
}

export default App;
