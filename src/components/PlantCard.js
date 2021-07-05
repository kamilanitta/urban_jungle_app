import React from "react";
import { Link } from "react-router-dom";

function PlantCard() {
  return (
    <div>
      <div className="card" style={{ width: "13rem", height: "15rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary"></Link>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
