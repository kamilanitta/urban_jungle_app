import { Component } from "react";

class Plant extends Component {
  state = {
    imagem: "",
    categoria: "",
    nomePlanta: "",
    nomeCientifico: "",
    rega: "",
    plantio: "",
    descricao: "",
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>imagem</label>
          <input type="text" name="imagem" value={this.state.image}></input>
          <label>Nome</label>
          <input type="text" name="nome" value={this.state.name}></input>
        </form>
      </div>
    );
  }
}
export default Plant;
