import React from "react";

function PlantCard(props) {
  return (
    <div className="plantCardInfo ">
      <div className="card" style={{ width: "200px", height: "200px" }}>
        <img src={props.imagem} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.nomePlanta}</h4>
          <h5 className="card-title">{props.nomeCientifico}</h5>
          <p className="card-text">{props.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
