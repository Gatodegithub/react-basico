import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: "2rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos css en react</h2>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en línea
      </h3>
      <h3 className="bg-react">
        Agregando normalize con
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con Módulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
