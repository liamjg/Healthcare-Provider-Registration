import React from 'react';

import './input-label.scss';

const InputLabel = ({ name, labelText, error, errorText, onBlur }) => (
  <div className="input-label">
    <label htmlFor={name}>{labelText}</label>
    <input
      className={`form-control ${error && 'error'}`}
      placeholder={labelText}
      type="text"
      name={name}
      onBlur={onBlur}
      noValidate
    />
    {error && <small>{errorText}</small>}
  </div>
);

export default InputLabel;
