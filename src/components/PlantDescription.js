import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

//Uma descrição de cada planta com todas as informações inseridas na API

class PlantDescription extends Component {
  state = {
    imagem: "",
    categoria: "",
    nomePlanta: "",
    nomeCientifico: "",
    descricao: "",
  };

  componentDidMount = async () => {
    const id = this.props.match.params.descricao;
    console.log(id);
    const response = await axios.get(
      `https://ironrest.herokuapp.com/1-urban-jungle/${id}`
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  render() {
    return (
      <div className="container p-0">
        <Header title="Urban Jungle" />
        <img
          className="img-fluid"
          src={this.state.imagem}
          alt={this.state.nomePlanta}
        />
        <div className="d-flex justify-content-around mt-1 "></div>
        <div className="m-4 ">
          <h4 className="mt-2 mb-4">
            <strong>{this.state.nomePlanta}</strong>
          </h4>
          <p className="mb-0 ">
            <strong>Nome científico:</strong> {this.state.nomeCientifico}
          </p>
          <p className="mt-0">
            <strong>Categoria:</strong> {this.state.categoria}
          </p>
          <h6>
            <strong>Descricão</strong>
          </h6>
          <p className="marg-b">{this.state.descricao}</p>
        </div>
      </div>
    );
  }
}

export default PlantDescription;
