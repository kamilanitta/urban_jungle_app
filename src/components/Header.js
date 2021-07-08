import React from "react";
import "../App.css";

//Header em todos os componentes, sendo alterado a cada componente a partir da props

function Header(props) {
  return (
    <nav
      className="navbar navbar-dark bg-verde justify-content-center"
      style={{
        height: "75px",
        opacity: "60%",
      }}
    >
      <h1
        style={{
          textDecoration: "none",
          color: "#fff",
          fontSize: "20pt",
          textAlign: "center",
        }}
      >
        {props.title}
      </h1>
    </nav>
  );
}

export default Header;
