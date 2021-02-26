import React, { Component } from "react";

class Reloj extends Component {
  constructor({ hora }) {
    super({ hora });
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO ESTA en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString,
      visible: false,
    };

    this.temporizador = null;
  }

  // Los elementos ya cargaron en el dom
  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  // Se ejecuta cada vez que cambian las props o el estado
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    })
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    })
  };

  render() {
    console.log(
      4,
      "El componente se dibuja en el DOM o redibuja por algun cambio en las propiedades o el state"
    );

    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
