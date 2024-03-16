function Chevron({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
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
  );
}

function PlusSign({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
    </svg>
  );
}

function TrashCan({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
      ></path>
    </svg>
  );
}

function Reset({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="1em"
      // height="1em"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        // fill="currentColor"
        d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
      ></path>
    </svg>
  );
}

function Print({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="1em"
      // height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        // fill="currentColor"
        d="M18 7H6V3h12zm0 5.5q.425 0 .713-.288T19 11.5q0-.425-.288-.712T18 10.5q-.425 0-.712.288T17 11.5q0 .425.288.713T18 12.5M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v6h-4z"
      ></path>
    </svg>
  );
}

function Github({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="1em"
      // height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        // fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

export { Chevron, PlusSign, TrashCan, Reset, Print, Github };
