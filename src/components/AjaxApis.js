import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name}></img>
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then(({ results }) => {
        results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((res) => {
              let pokemon = {
                id: res.id,
                name: res.name,
                avatar: res.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];

              // lo mismo que decir pokemons:pokemons
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asíncronas en componentes de clases</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
