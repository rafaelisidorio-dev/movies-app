import type { ChangeEvent } from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

interface NavBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function NavBar({ searchTerm, setSearchTerm }: NavBarProps) {
  return (
    <header>
      <nav className="bg-[rgba(3,37,65,1)] py-5">
        <div className="flex items-center justify-between gap-2 sm:gap-0 mx-5 md:mx-6">
          <Link to="/">
            <img className="w-[154px] h-[20px]" src={logo} />
          </Link>

          <div className="text-slate-400 hidden md:flex md:items-center md:gap-8 ">
            <a href="#" className="text-base font-semibold">
              Filmes
            </a>
            <a href="#" className="text-base font-semibold">
              Séries
            </a>
            <a href="#" className="text-base font-semibold">
              Pessoas
            </a>
            <a href="#" className="text-base font-semibold">
              Mais
            </a>
          </div>

          <input
            className="w-2/4 sm:w-fit text-slate-400 font-semibold pl-1 rounded bg-transparent focus:border-2 border-slate-500 outline-none"
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </nav>
    </header>
  );
}
