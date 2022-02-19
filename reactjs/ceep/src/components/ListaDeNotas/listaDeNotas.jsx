import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((notas, index) => {
          return (
            <li className="lista-notas_item " key={index}>
              <CardNota titulo={notas.titulo} texto={notas.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
