import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PlantList extends Component {
  state = {
    plantaList: [],
  };

  componentDidMount = async () => {
    try {
      const idPlanta = this.props.match.params._id;
      const categoriaPlanta = this.props.match.params.categoria;

      const response = await axios.get(
        `https://ironrest.herokuapp.com/1-urban-jungle/${categoriaPlanta}/${idPlanta}`
      );

      console.log(response);

      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container mt-5 mb-5 ncards-plantas ">
        <div className="row row-cols-2">
          {this.state.plantaList.map((planta) => {
            return (
              <div className="card col">
                <Link to={planta._id}>
                  <img
                    src={planta.imagem}
                    className="card-img-top mt-3"
                    alt="..."
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
    );
  }
}

export default PlantList;
