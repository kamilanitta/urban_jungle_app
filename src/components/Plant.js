import { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link
          to={`/editar-planta/${this.state._id}`}
          type="Editar planta"
          className="btn rounded-pill bg-amarelo"
          style={{ textDecoration: "none" }}
        >
          Editar
        </Link>
        <Link
          to={`/apagar-planta/${this.state._id}`}
          type="Apagar planta"
          className="rounded-pill bg-laranja"
          style={{ textDecoration: "none" }}
        >
          Apagar
        </Link>
      </div>
    );
  }
}
export default Plant;
