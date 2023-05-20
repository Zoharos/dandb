import React from 'react';
import './Textfield.scss';

function TextField({ onChange, value, placeholder = "Enter your text here" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="text-field"
      onChange={onChange}
      value={value}
    />
  );
}

export default TextField;