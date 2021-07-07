import { Component } from "react";
import axios from "axios";

class EditPlanta extends Component {
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
    const id = this.props.match.params.descricao;
    console.log(id);
    const response = await axios.get(
      `https://ironrest.herokuapp.com/1-urban-jungle/${id}`
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  handleFormSubmit = async () => {
    const id = this.props.match.params.descricao;
    console.log(id);
    const response = await axios.put(
      `https://ironrest.herokuapp.com/1-urban-jungle/${id}`,
      { ...this.state }
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>imagem</label>
          <input type="imageURL" name="imagem" value={this.state.image}></input>
          <label>Nome</label>
          <input type="text" name="nome" value={this.state.name}></input>
        </form>
      </div>
    );
  }
}
