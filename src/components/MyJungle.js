import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MyJungle extends Component {
  state = {
    imagem: "",
    categoria: "",
    nomePlanta: "",
    nomeCientifico: "",
    descricao: "",
    minhaPlanta: "",
  };

  componentDidMount = async () => {
    const id = this.props.match.params.myjungle;
    const response = await axios.get(
      `https://ironrest.herokuapp.com/2-urban-jungle-user`
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  render() {
    return (
      <div className="m-0">
        <h4 className="ms-4 mt-0">Parabéns, Maria! </h4>
        <h6 className="ms-4">Sua selva está ficando maravilhosa!</h6>
        <div
          className="d-flex card mt-5 border border-secondary"
          style={{ maxWidth: "375px" }}
        >
          <div className="row g-0">
            <div className="col-4 px-2 align-self-center">
              <Link to="">
                <img
                  src={this.state.imagem}
                  className=""
                  alt="..."
                  style={{ width: "118px", height: "123px" }}
                />
              </Link>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h4 className="card-title mb-0">{this.state.minhaPlanta}</h4>
                <p className="card-text">
                  <small className="text-muted">
                    {this.state.nomeCientifico}
                  </small>
                </p>

                <h6 className="card-title mt-3">Próximas ações em:</h6>

                <div className="d-flex ">
                  <div className="d-flex flex-row me-4">
                    <i className="fas fa-tint align-self-center me-2"></i>
                    <p className="card-text">
                      <small className="">5 dias</small>
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <i className="fas fa-exclamation-triangle align-self-center me-2"></i>
                    <p className="card-text">
                      <small className="">12 semanas</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
