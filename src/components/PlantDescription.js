import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Search from "./Search";

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
      <div className="container">
        <img
          className="img-fluid"
          src={this.state.imagem}
          alt={this.state.nomePlanta}
        />
        <div className="d-flex justify-content-around mt-1"></div>
        <div className="textos">
          <h4 className="mt-2">{this.state.nomePlanta}</h4>
          <p className="mb-0">
            <strong>Nome científico:</strong> {this.state.nomeCientifico}
          </p>
          <p className="mt-0">
            <strong>Categoria:</strong> {this.state.categoria}
          </p>
          <h6>
            <strong>Descricão</strong>
          </h6>
          <p>{this.state.descricao}</p>
        </div>
      </div>
    );
  }
}

export default PlantDescription;
