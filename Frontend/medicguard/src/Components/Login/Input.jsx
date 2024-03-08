import React from 'react';

const Input = ({ type, name, id, value, onChange }) => {
  return (
    <input type={type} name={name} id={id} value={value} onChange={onChange} />
  );
}

export default Input;
