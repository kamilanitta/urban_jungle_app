import { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";

export default class EditPlanta extends Component {
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
    delete response.data._id;
    console.log(response);
    this.setState({ ...response.data });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  // handleFormSubmit = async (event) => {
  //   const id = this.props.match.params.id;
  //   event.preventDefault();
  //   axios
  //     .put(
  //       `https://ironrest.herokuapp.com/2-urban-jungle-user/${id}`,this.state
  //     )
  //     .then((response) => {
  //       this.props.history.push("/my-jungle");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const response = await axios.put(
      `https://ironrest.herokuapp.com/2-urban-jungle-user/${id}`,
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
      <form onSubmit={this.handleFormSubmit} className="container">
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
          //onClick={this.handleFormSubmit}
          type="submit"
          className="mt-5 btn btn-success"
        >
          Submit
        </button>
      </form>
    );
  }
}
