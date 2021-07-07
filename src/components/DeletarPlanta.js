import React, { Component } from "react";
import axios from "axios";

export default class DeletarPlanta extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    axios
<<<<<<< HEAD
      .delete(`https://ironrest.herokuapp.com/1-urban-jungle/${id}`)
=======
      .delete(
        `https://ironrest.herokuapp.com/1-urban-jungle/${id}`
      )
>>>>>>> 42434b1ece86e43a1e142eda9aedd37af8cf00c6
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
