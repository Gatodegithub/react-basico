import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "False"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Propiedades por defecto del componente (no se reciben de un padre ni se las pongo yo en la etiqueta del componente en app.js)
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

// npm i -S prop-types   -> es una libreria para usar verificación de tipos en las props de un componente
Propiedades.propTypes = {
  cadena: PropTypes.string, // Debe ser un string la prop cadena
  numero: PropTypes.number.isRequired, //Debe existir esta propiedad o saldra un warning
};
