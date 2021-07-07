import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import PlantDescription from "./PlantDescription";

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

  handleChange = (event) => {
    this.setState({ [event.target.nomePlanta]: event.target.value });
  };

  handleFormSubmit = async () => {
    const response = await axios.post(
      "https://ironrest.herokuapp.com/1-urban-jungle",
      this.state
    );

    this.setState({
      imagem: "",
      categoria: "",
      nomePlanta: "",
      nomeCientifico: "",
      rega: "",
      plantio: "",
      descricao: "",
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <label>Imagem</label>
          <input
            type="text"
            name="imagem"
            value={this.state.imagem}
            onChange={this.handleChange}
          ></input>
          <label>Categoria</label>
          <input
            type="text"
            name="categoria"
            value={this.state.categoria}
            onChange={this.handleChange}
          ></input>
          <label>Nome da Planta</label>
          <input
            type="text"
            name="nomePlanta"
            value={this.state.nomePlanta}
            onChange={this.handleChange}
          ></input>
          <label>Nome Científico</label>
          <input
            type="text"
            name="nomeCientifico"
            value={this.state.nomeCientifico}
            onChange={this.handleChange}
          ></input>
          <p>Informações</p>
          <label>Rega</label>
          <input
            type="text"
            name="rega"
            value={this.state.rega}
            onChange={this.handleChange}
          ></input>
          <label>Plantio</label>
          <input
            type="text"
            name="plantio"
            value={this.state.plantio}
            onChange={this.handleChange}
          ></input>
          <label>Descrição</label>
          <input
            type="text"
            name="descricao"
            value={this.state.descricao}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}
