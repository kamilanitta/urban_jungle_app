import React, { Component } from "react";
import axios from "axios";

export default class DeletarPlanta extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ironrest.herokuapp.com/1-urban-jungle/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div>Apagando...</div>;
  }
}
