import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "./Header";

class PlantsGuide extends Component {
  state = {
    plantaList: [],
  };

  componentDidMount = async () => {
    try {
      const categoriaPlanta = this.props.match.params.categoria;
      console.log(categoriaPlanta);
      const response = await axios.get(
        `https://ironrest.herokuapp.com/1-urban-jungle`
      );

      let filtroCategorias = response.data.filter((elemento) => {
        return elemento.categoria.includes(categoriaPlanta);
      });

      // console.log(filtroCategorias);

      this.setState({ plantaList: filtroCategorias });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container ">
        <Header title="Guia de Plantas" />
        <div className="bloco-plantas row row-cols-2 mt-5 mb-5">
          {this.state.plantaList.map((planta) => {
            return (
              <div className="card col">
                <Link to={`/descricao/${planta._id}`} className="links">
                  <img
                    src={planta.imagem}
                    className="card-img-top mt-3"
                    alt="..."
                    style={{ width: "35vw", height: "15vh" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{planta.nomePlanta}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlantsGuide;
