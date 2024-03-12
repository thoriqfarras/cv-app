import { useState } from 'react';

function Input({ label, id, type, name, className, onChange }) {
  const [value, setValue] = useState('');

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} onChange={onChange} />
    </div>
  );
}

export default Input;
