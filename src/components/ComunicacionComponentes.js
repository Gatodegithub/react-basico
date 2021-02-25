import React, { Component } from "react";

/*
React se pasa los datos de forma unidereccional. Pero los hijos se comunican con los padres por medio de los eventos.
1. Comunicación entre un componente padre a uno hijo.
2. Comunicación entre un componente hijo y su padre.
3. Comunicación entre componentes no relacionados.
*/

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  // Con arrow funcion nos ahorramos el bindeo del this.
  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>Contador <b>{this.state.contador}</b></p>
        <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
        <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
      </>
    );
  }
}


function Hijo (props){
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  )
}