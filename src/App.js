import React, { Component } from 'react';
import './App.css';
import Section from './section.js'

class App extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="index.html">CCI - LOREZE</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
      </nav>

      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">BIENVENUE SUR LE SITE DE LA CCI DE LOREZE</h1>
        <p class="lead">Decouvrez ici tout les informations de la Loreze METEO,NEWS,TRAFFIC</p>
    </div>

      <Section></Section>

        <footer>
          <div class="container-fluid bg-dark text-white py-3">
             <div class="container">
               <div class="row">
                  <div class="col-md-7">
                      CCI DE LOREZE TOUT DROIT RESERVE
                  </div>
               </div>
             </div>
             </div>
         </footer>
    </div>
    );
  }
}

export default App;
