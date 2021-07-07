import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";

export default class AddPlants extends Component {
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
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleFormSubmit = async () => {
    const response = await axios.post(
      "https://ironrest.herokuapp.com/1-urban-jungle",
      this.state
    );
    console.log(response);

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
        <TextInput
          label="Imagem"
          type="text"
          name="imagem"
          value={this.state.imagem}
          onChange={this.handleChange}
        />
        <TextInput
          label="Categoria"
          type="text"
          name="categoria"
          value={this.state.categoria}
          onChange={this.handleChange}
        />
        <TextInput
          label="Nome da Planta"
          type="text"
          name="nomePlanta"
          value={this.state.nomePlanta}
          onChange={this.handleChange}
        />
        <TextInput
          label="Nome Científico"
          type="text"
          name="nomeCientifico"
          value={this.state.nomeCientifico}
          onChange={this.handleChange}
        />
        <p>Informações</p>
        <TextInput
          label="Rega"
          type="text"
          name="rega"
          value={this.state.rega}
          onChange={this.handleChange}
        />
        <TextInput
          label="Plantio"
          type="text"
          name="plantio"
          value={this.state.plantio}
          onChange={this.handleChange}
        />
        <TextInput
          label="Descrição"
          type="text"
          name="descricao"
          value={this.state.descricao}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleFormSubmit}
          className="mt-5 btn btn-success"
        >
          Submit
        </button>
      </div>
    );
  }
}
