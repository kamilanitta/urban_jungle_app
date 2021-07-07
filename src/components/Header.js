import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <nav
      className="navbar navbar-dark bg-verde justify-content-center"
      style={{
        height: "88px",
        opacity: "60%",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          fontSize: "20pt",
          textAlign: "center",
        }}
      >
        Urban Jungle
      </Link>
    </nav>
  );
}

export default Header;
