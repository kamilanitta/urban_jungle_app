import React from 'react';

export default function TextInput(props) {
    return(
        <div>
        <label htmlForm={props.nome} className='form-label'>
        {props.label}
        </label>
        <input
        type={props.type}
        className="form-control"
        id={props.nome}
        id={props.nome}
        nome={props.nome}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
    );
}