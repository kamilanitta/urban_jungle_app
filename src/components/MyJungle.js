import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "./Header";

export default class MyJungle extends Component {
  state = {
    myJungle: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/2-urban-jungle-user"
      );

      console.log(response.data);

      this.setState({ myJungle: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="marg-b">
        <Header title="My Jungle" />
        <h4 className="ms-4 mt-5">Parabéns! </h4>
        <h6 className="ms-4 mb-4">Sua selva está ficando maravilhosa!</h6>
        {this.state.myJungle.map((selva) => {
          return (
            <div
              className="d-flex card border border-secondary"
              style={{ maxWidth: "375px" }}
            >
              <div className="row g-0">
                <div className="col-4 px-2 align-self-center">
                  <Link to={`/planta/${selva._id}`}>
                    <img
                      src={selva.imagem}
                      className=""
                      alt="..."
                      style={{ width: "118px", height: "123px" }}
                    />
                  </Link>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title mb-0">{selva.nomePlanta}</h4>
                    <p className="card-text">
                      <small className="text-muted">
                        {selva.nomeCientifico}
                      </small>
                    </p>

                    <h6 className="card-title mt-3">Informações:</h6>

                    <div className="d-flex ">
                      <div className="d-flex flex-row me-4">
                        <i className="fas fa-tint align-self-center me-2"></i>
                        <p className="card-text">
                          <small className="">{selva.rega}</small>
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <i className="fas fa-exclamation-triangle align-self-center me-2"></i>
                        <p className="card-text">
                          <small className="">{selva.plantio}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
