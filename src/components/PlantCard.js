import React from "react";
import { Link } from "react-router-dom";

function PlantCard(props) {
  return (
    <div>
      <div className="card" style={{ width: "200px", height: "200px" }}>
        <img src={props.imagem} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.nomePlanta}</h4>
          <h5 className="card-title">{props.nomeCientifico}</h5>
          <p className="card-text">{props.descricao}</p>
          <Link to="#" className="btn btn-primary"></Link>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
