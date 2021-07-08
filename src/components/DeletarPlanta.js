import React, { Component } from "react";
import axios from "axios";

export default class DeletarPlanta extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ironrest.herokuapp.com/2-urban-jungle-user/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/my-jungle");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div style={{ textAlign: "center" }}>Apagando...</div>;
  }
}
