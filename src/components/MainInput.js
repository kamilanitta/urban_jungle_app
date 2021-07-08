import React from "react";

export default function MainInput(props) {
  return (
    <div className="mainInput">
      <input
        type={props.type}
        className="form-control plantNameBox"
        placeholder={props.placeholder}
        id={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}
