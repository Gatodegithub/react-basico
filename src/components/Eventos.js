import React, { Component } from "react";

// Hay que bindear el this en los componentes de clase
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // le decimos al metodo sumar de la clase que le vamos a enlazar(bind) con el this de la clase
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos En Componentes De Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow functions - Su caracterista es que heredan el this del contexto donde se encuentran!
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos En Componentes De Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton({myOnClick}) {
//   return <button onClick={myOnClick}>Botón hecho componente</button>;
// }

// Otra forma mas corta de hacer el componente
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  // La mayoria de los eventos js nativos estan soportadas por una capa que recubre react, llamada SynteticBaseEvent, esto le da soporte a los diferentes navegadores y adicionalmente tiene la caracteristica de que tienes un mejor control desde react del evento
  handleClick = (e, mensaje) => {
    console.log(e);
    // Para acceder al evento nativo (original)
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>

        {/* Evento Personalizado, pasandole evento por props a componente hijo*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
