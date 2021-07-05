import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav
      className="navbar fixed-bottom navbar-light"
      style={{ backgroundColor: "#012D04" }}
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
          <i class="fas fa-home"></i>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }}>
          <i class="fas fa-plus-circle"></i>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }}>
          <i class="fas fa-leaf"></i>
        </Link>
      </div>
    </nav>
  );
}
