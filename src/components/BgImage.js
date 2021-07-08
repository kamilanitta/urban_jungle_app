import React from "react";
// Apenas renderiza a imagem de background do HomePage
function BgImage() {
  return (
    <div className="bg-imagem-home">
      <div className="bg-titulo-home">
        <h2>
          {" "}
          <strong>Welcome to the Jungle!</strong>
        </h2>{" "}
      </div>
    </div>
  );
}

export default BgImage;
