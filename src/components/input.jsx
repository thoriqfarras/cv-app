import { useState } from 'react';

function Input({ label, id, type, name, className }) {
  const [value, setValue] = useState('');

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </div>
  );
}

export default Input;
