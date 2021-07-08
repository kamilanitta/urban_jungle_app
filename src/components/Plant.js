import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

// Mostra a descrição de cada planta inserida pelo usuário. No fim da tela dando a opção de editar ou apagar a planta descrita

export default class Plant extends Component {
  state = {
    imagem: "",
    categoria: "",
    nomePlanta: "",
    nomeCientifico: "",
    rega: "",
    plantio: "",
    descricao: "",
  };
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    const response = await axios.get(
      `https://ironrest.herokuapp.com/2-urban-jungle-user/${id}`
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  handleChange = (event) => {
    this.setState({ [event.target.nomePlanta]: event.target.value });
  };

  render() {
    return (
      <div className="container marg-b p-0">
        <Header title="Minha Planta" />
        <img
          className="img-fluid"
          src={this.state.imagem}
          alt={this.state.nomePlanta}
        />
        <div className="d-flex justify-content-around mt-1"></div>
        <div className="m-4">
          <h4 className="mt-2 mb-4">
            <strong>{this.state.nomePlanta}</strong>
          </h4>
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
        <div className="d-flex w-100 justify-content-around marg-b">
          <Link
            to={`/editar-planta/${this.props.match.params.id}`}
            type="text"
            className="btn rounded-pill bg-amarelo mt-3"
            style={{
              textDecoration: "none",
              color: "white",
              width: "40%",
            }}
          >
            Editar
          </Link>
          <Link
            to={`/apagar-planta/${this.props.match.params.id}`}
            type="text"
            className="btn rounded-pill bg-laranja mt-3"
            style={{
              textDecoration: "none",
              color: "white",
              width: "40%",
            }}
          >
            Apagar
          </Link>
        </div>
      </div>
    );
  }
}
