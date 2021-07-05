import axios from "axios";
import React from "react";
import { Component } from "react";
//import { Link } from "react-router-dom";

//import PlantCard from "./PlantCard";

class HomePage extends Component {
  state = {
    categoriaPlantas: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/1-urban-jungle"
      );
      console.log(response.data[0].categoria);

      if (response.data[0].categoria === "Samambaias") {
        this.setState({ categoriaPlantas: [...response.data] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container mt-5 cards-plantas ">
        <div className="row row-cols-2">
          {this.state.categoriaPlantas.map((planta) => {
            return (
              <div className="card col">
                <img
                  src={planta.imagem}
                  className="card-img-top mt-3"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">{planta.nomePlanta}</h4>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    );
  }
}

export default HomePage;
