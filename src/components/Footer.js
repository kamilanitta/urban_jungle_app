import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav
      className="navbar fixed-bottom navbar-light bg-verde"
      style={{ height: "75px" }}
    >
      <div
        className="container-fluid"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Link
          className="navbar-brand"
          style={{ color: "white", textDecoration: "none" }}
          to="/"
        >
          <i className="fas fa-home"></i>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/add-planta"
        >
          <i className="fas fa-plus-circle"></i>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/my-jungle"
        >
          <i className="fas fa-leaf"></i>
        </Link>
      </div>
    </nav>
  );
}
