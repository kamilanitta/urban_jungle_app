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
          <input type="text" name="imagem" value={this.state.imagem}></input>
          <label>categoria</label>
          <input type="text" name="categoria" value={this.state.categoria}></input>
          <label>nomePlanta</label>
          <input type="text" name= "nomePlanta" value={this.state.nomePlanta}></input>
          <label>nomeCientifico</label>
          <input type="text" name="nomeCientifico" value={this.state.nomeCientifico}></input>
          <label>rega</label>
          <input type="text" name="rega" value={this.state.rega}></input>
          <label>plantio</label>
          <input type="text" name="plantio" value={this.state.plantio}></input>
          <label>descricao</label>
          <input type="text" name="descricao" value={this.state.descricao}></input>
        </form>
      </div>
    );
  }
}
export default Plant;
