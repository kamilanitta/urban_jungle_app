import { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import Header from "./Header";
import MainInput from "./MainInput";

//Component responsavel por editar as informações inseridas pelo usuário que ficam contidas no componente Plant.JS

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
      <div>
        <Header title="Editar Planta" />
        <form onSubmit={this.handleFormSubmit} className="container p-0">
          <div
            className="container p-0 mb-5 d-flex flex-column align-items-center justify-content-center  "
            style={{
              backgroundColor: "#d8d8d8",
              width: "100%",
              height: "250px",
            }}
          >
            <TextInput
              type="text"
              name="imagem"
              value={this.state.imagem}
              onChange={this.handleChange}
              placeholder="URL da imagem"
              style={{ width: "100%", height: "250px" }}
            />
            <div className="bloco-inputs ">
              {" "}
              <MainInput
                type="text"
                placeholder="Nome da planta"
                value={this.state.nomePlanta}
                onChange={this.handleChange}
                style={{ transform: "translateY(-70px)" }}
                name="nomePlanta"
              />
              <MainInput
                type="text"
                placeholder="Categoria"
                value={this.state.categoria}
                onChange={this.handleChange}
                className="mainInputSubtitulo "
                name="categoria"
              />
            </div>
          </div>{" "}
          <div className="plantaBox ">
            <p className="marg-t">
              <strong>Informações:</strong>
            </p>
            <div className="d-flex justify-content-around">
              <TextInput
                label="Rega:"
                type="text"
                name="rega"
                value={this.state.rega}
                onChange={this.handleChange}
              />
              <TextInput
                label="Plantio:"
                type="text"
                name="plantio"
                value={this.state.plantio}
                onChange={this.handleChange}
              />
            </div>{" "}
            <div className="form-floating mt-4">
              <TextInput
                label="Descrição:"
                type="text"
                name="descricao"
                value={this.state.descricao}
                onChange={this.handleChange}
                className="form-control"
                style={{ height: "100px" }}
              />
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <button type="submit" className="mt-5 btn input-radius bg-amarelo">
              Editar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
