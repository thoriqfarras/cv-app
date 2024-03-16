import React from 'react';
import { Chevron } from './Icons';

function Dropdown({
  title,
  wrapperClass,
  headerClass,
  childClass,
  children,
  onShow,
  isActive = false,
  overwriteClasses = false,
  overwriteHeader = false,
}) {
  const childElements = React.Children.toArray(children);

  return (
    <div className={wrapperClass}>
      <button
        className={`${
          !overwriteClasses
            ? 'flex justify-between items-center w-full py-4 px-2'
            : ''
        } ${!isActive ? 'rounded-xl' : 'rounded-t-xl'} ${headerClass}`}
        onClick={onShow}
      >
        {overwriteHeader ? childElements[0] : <p>{title}</p>}
        <Chevron className={`transition-all ${isActive ? '-rotate-90' : ''}`} />
      </button>

      <div
        className={`${
          !overwriteClasses ? 'flex flex-col p-4' : ''
        } ${childClass} ${!isActive ? 'hidden' : ''}`}
      >
        {overwriteHeader ? childElements.slice(1) : childElements}
      </div>
    </div>
  );
}

export default Dropdown;
