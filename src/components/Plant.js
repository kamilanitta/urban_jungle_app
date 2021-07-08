import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import MainInput from "./MainInput";
import PlantCard from "./PlantCard";

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

  // handleFormSubmit = async () => {
  //   const response = await axios.post(
  //     "https://ironrest.herokuapp.com/2-urban-jungle-user",
  //     this.state
  //   );

  //   this.setState({
  //     imagem: "",
  //     categoria: "",
  //     nomePlanta: "",
  //     nomeCientifico: "",
  //     rega: "",
  //     plantio: "",
  //     descricao: "",
  //   });
  // };

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
        <div row>
          <Link
            to={`/editar-planta/${this.state._id}`}
            type="text"
            className="btn rounded-pill bg-amarelo mt-3 col"
            style={{
              textDecoration: "none",
              color: "white",
              width: "120px",
            }}
          >
            Editar
          </Link>
          <Link
            to={`/apagar-planta/${this.state._id}`}
            type="text"
            className="btn rounded-pill bg-laranja mt-3 col"
            style={{
              textDecoration: "none",
              color: "white",
              width: "120px",
            }}
          >
            Apagar
          </Link>
        </div>
      </div>

      // <div className="oioioi">
      //   <form onSubmit={this.handleFormSubmit}></form>

      //   <div className="plantaimg">
      //     {/* <img
      //     className="img-fluid"
      //     src="https://1.bp.blogspot.com/-LCF3CsNYO8c/W74WSRS96-I/AAAAAAAAicA/EJelgXWJ3GYEVB2arxYMOQ5Lxb96TnE_wCLcBGAs/s1600/Caladiums.jpg"
      //     //  src={this.state.imagem}
      //     alt={this.state.nomePlanta}
      //   /> */}
      //     <PlantCard />
      //     {/* <MainInput
      //       type="text"
      //       placeholder="Nome da planta"
      //       value={this.state.nomePlanta}
      //       onChange={this.handleChange}

      //     />
      //     <MainInput
      //       type="text"
      //       placeholder="Categoria"
      //       value={this.state.categoria}
      //       onChange={this.handleChange}
      //       className="mainInputSubtitulo"
      //     /> */}
      //   </div>
      //   <div className="plantaBox d-flex flex-column">
      //     <p className="mt-3">
      //       <strong>Informações:</strong>
      //     </p>
      //     <div className="d-flex row ">
      //       <TextInput
      //         label="Rega"
      //         type="text"
      //         name="rega"
      //         value={this.state.rega}
      //         onChange={this.handleChange}
      //         className="row-md-2"
      //       />
      //       <TextInput
      //         label="Plantio"
      //         type="text"
      //         name="plantio"
      //         value={this.state.plantio}
      //         onChange={this.handleChange}
      //         className="row-md-2"
      //       />
      //
      //     </div>
      //   </div>
      // </div>
    );
  }
}
