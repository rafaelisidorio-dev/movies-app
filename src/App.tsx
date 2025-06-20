import { NavBar } from "./components/NavBar";
import { MoviesList } from "./components/MoviesList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import logoFooter from "/logo-footer.svg";
import { PaginationSection } from "./components/Pagination";

export interface MoviesProps {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}

interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps>();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<number>();
  const [loading, setLoading] = useState(true);
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    // Reset page to 1 when changing search
    setSearchParams((params) => {
      params.set("page", String(1));

      return params;
    });
  }, [searchTerm]); // Dependency array: useEffect runs when 'searchTerm' changes

  // Run effect to load movies when the page or the searchTerm changes
  useEffect(() => {
    const endpoint =
      searchTerm === ""
        ? "https://api.themoviedb.org/3/discover/movie"
        : "https://api.themoviedb.org/3/search/movie";

    axios
      .get(endpoint, {
        params: {
          api_key: "0a402cff78047e395e95defbf2f582ba",
          query: searchTerm,
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data);
        setPages(response.data.total_pages);
        console.log(response.data);

        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [searchTerm, page]);

  return (
    <div>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="p-5 md:p-6">
        {loading ? (
          <h1 className="font-semibold">Carregando...</h1>
        ) : (
          <MoviesList movies={movies!} />
        )}
      </main>

      <div className="flex items-center justify-center my-5">
        <PaginationSection page={page} pages={pages!} />
      </div>

      <footer className="w-full bg-[rgba(3,37,65,1)] bottom-0 flex items-center justify-center py-5">
        <img className="w-[130px] h-[94px]" src={logoFooter} />
      </footer>
    </div>
  );
}
