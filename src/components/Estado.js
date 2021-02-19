import React, { Component } from "react";

// Componentes funcionales no pueden tener estado, con hooks ya se puede (useState).
// en este caso al pasar el estado del padre a este componente hijo funcional, se le asignara como una prop
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // El estado NO se puede cambiar directamente. Debo utilizar setState
    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador}/>
      </div>
    );
  }
}
