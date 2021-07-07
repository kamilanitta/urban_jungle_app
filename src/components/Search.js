import React from "react";

export default function Search() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <i className="fas fa-search" />
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar"
        aria-label="Text input with checkbox"
      />
    </div>
  );
}
