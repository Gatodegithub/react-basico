import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import Estado from "./components/Estado";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import "./App.css";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelogHooks";
import AjaxHooks from "./components/AjaxHooks";
import Referencias from "./components/Referencias";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";


function App() {
  let yo = "Aldo Saavedra";
  // let auth = true;
  // let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul> */}
          <p>Hola {yo} serás un gran desarrollador!</p>
          {/* <b>
          {auth ? "El usuario esta logueado" : "El usuario no esta logueado"}
        </b> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente jiji" />
          <hr />
          {/* Numeros y booleanos se ponen entre llaves o se tomara como texto si se usan "" */}
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Aldo", correo: "Aldo@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact="<i>Esto es un elemento React(jsx)</i>"
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
        </section>
      </header>
    </div>
  );
}

export default App;
