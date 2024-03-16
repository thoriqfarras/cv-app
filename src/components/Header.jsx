import { Reset, Print, Github } from './Icons';

function Header(props) {
  return (
    <div className="flex flex-col items-center">
      <img src="vite.svg" alt="vite logo" className="h-20" />
      <h1 className="font-bold text-4xl">CVite</h1>
      <p className="text-zinc-400">A simple CV builder.</p>
      <div className="flex justify-center gap-4 my-4">
        <button
          className="hover:[&>*]:fill-zinc-100"
          onClick={props.resetData}
          title="Reset Data"
        >
          <Reset className="fill-zinc-400 h-6" />
        </button>
        <button
          className="hover:[&>*]:fill-zinc-100"
          onClick={props.printCV}
          title="Print"
        >
          <Print className="fill-zinc-400 h-6" />
        </button>
        <a
          href="https://github.com/thoriqfarras"
          title="Check out my Github!"
          target="_blank"
          className="hover:[&>*]:fill-zinc-100"
        >
          <Github className="fill-zinc-400 h-6" />
        </a>
      </div>
      <button
        className="bg-blue-600 p-2 rounded-lg hover:brightness-110"
        onClick={props.useSampleData}
      >
        Use Sample Data
      </button>
    </div>
  );
}

export default Header;
