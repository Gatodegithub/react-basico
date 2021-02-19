import React from "react";

// Componente asignado a variable arrow function
const Componente = props => <h2>{props.msg}</h2>

// Componente funcional
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

// class Componente extends React.Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

export default Componente;
