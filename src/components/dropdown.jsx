import { useState } from 'react';

function Dropdown({ title, children, onShow, isActive = false }) {
  return (
    <div className="border-2 border-black">
      <button
        className="flex justify-between items-center w-full py-4 px-2"
        onClick={onShow}
      >
        <p>{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={`transition-all ${isActive ? '-rotate-90' : ''}`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 6l-6 6l6 6"
          ></path>
        </svg>
      </button>
      <div
        className={`flex flex-col p-2 border-2 gap-2 border-zinc-500 overflow-hidden transition-all ${
          !isActive ? 'hidden' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
