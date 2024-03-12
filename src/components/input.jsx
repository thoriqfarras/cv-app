import { useState } from 'react';

function TextInput({
  label,
  id,
  inputValue,
  name,
  wrapperClass,
  labelClass,
  inputClass,
  onChange,
  overwriteClasses = false,
}) {
  const [value, setValue] = useState('');

  return (
    <div
      className={
        overwriteClasses ? wrapperClass : `flex flex-col ${wrapperClass}`
      }
    >
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={onChange}
        className={inputClass}
        value={inputValue}
      />
    </div>
  );
}

export default TextInput;
