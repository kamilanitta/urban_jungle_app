import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import BgImage from "./BgImage";

class HomePage extends Component {
  state = {
    categoriaPlantas: [],
    cadaCategoria: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/1-urban-jungle"
      );

      //console.log(response.data);

      this.setState({ categoriaPlantas: [...response.data] });
      this.getCategorias();
    } catch (err) {
      console.log(err);
    }
  };

  getCategorias = () => {
    let mapPlantas = this.state.categoriaPlantas.map((planta) => {
      return planta.categoria;
    });

    let categoriaUnica = [...new Set(mapPlantas)].map((categoriaUnica) => {
      return {
        categoria: categoriaUnica,
        imagem: this.state.categoriaPlantas.find(
          (planta) => planta.categoria === categoriaUnica
        ).imagem,
      };
    });

    this.setState({ cadaCategoria: categoriaUnica });
  };

  render() {
    // console.log(this.state.cadaCategoria);
    return (
      <div className="bg-image-home">
        <Header title="Urban Jungle" />
        <BgImage />
        <div className="container ">
          <div className="bloco-categoria row row-cols-2  ">
            {this.state.cadaCategoria.map((planta) => {
              return (
                <div className="card col cards-plantas">
                  <Link
                    className="links"
                    to={`/guia/${planta.categoria}`}
                    key={planta._id}
                  >
                    <img
                      src={planta.imagem}
                      className="card-img-top imagem-planta"
                      alt="..."
                      style={{ height: "20vh" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{planta.categoria}</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default HomePage;
