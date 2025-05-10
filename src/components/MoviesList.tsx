import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { MoviesProps } from "../App";

interface MoviesListProps {
  movies: MoviesProps;
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="grid grid-cols-2 gap-5 md:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies?.results.map((movie, index) => (
        <li
          className="text-black leading-5 border border-gray-300 rounded-md shadow-md overflow-hidden"
          key={index}
        >
          <div className="h-80">
            <img
              className="size-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </div>

          <div className="pt-8 p-3 relative">
            <div className="absolute -top-5 size-10 bg-[#081c22] rounded-full flex items-center justify-center">
              {/*remove decimals and dot*/}
              <p className="text-white font-bold text-sm relative">
                {movie.vote_average.toFixed(1).replace(".", "")}
                <span className="text-[6px] absolute -top-0.5">%</span>
              </p>
            </div>

            <h2 className="font-bold">{movie.title}</h2>
            <span className="text-[rgba(0,0,0,.6)]">
              {movie.release_date.length > 0
                ? format(movie.release_date, "dd 'de' MMM 'de' yyyy", {
                    locale: ptBR,
                  })
                : "2024-02-28"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
