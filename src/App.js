import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import principal from './principal';

class App extends Component {

    constructor(props){
      super(props)
      this.state = { mensajeIn: this.props.variable }

    }

  render() {
    return (
      <div className = "App">
        <principal msg = "amigos"/>
        <h1> HOJA DE VIDA </h1>
        <h2> ILIANA PINTO </h2>
        <p>
        Soy responsable, dinámica, con aspiraciones
        y deseos de superacion, aprendo con rapidez y
        me intereso por cumplir adecuadamente con
        puntualidad, honestidad y responsabilidad
        en las diversas actividades que realizo.</p>

        <h2 > EDUCACION </h2>
        <p > 2014 - 2016</p>
        <p > Bachillerato en Ciencias y Humanidades
            La Estancia School</p>
        <p > 2016 - Presente</p>
        <p > Ingenieria en Sistemas Computacionales
            Universidad Tecnológica Centroamericana (UNITEC)
        </p>
        <h2 > EXPERIENCIA LABORAL </h2>
        <p > Atención al Cliente SEPACO</p>

      </div>
    );
  }
}

export default App;
