import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "./MoviesCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Moviepage = ({ input, Genre }) => {
  const [movies, setmovies] = useState([]);
  const [Page, setPage] = useState(1);

  const GetData = async () => {
    try {
      const searchText = input?.trim() || "";

      const response = await axios.get(
        searchText
          ? "https://api.themoviedb.org/3/search/movie"
          : Genre
          ? "https://api.themoviedb.org/3/discover/movie"
          : "https://api.themoviedb.org/3/trending/movie/day",
        {
          params: {
            api_key: API_KEY,
            page: Page,
            query: input,
            with_genres: Genre,
          },
        }
      );

      setmovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const HandlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const HandleNext = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    GetData();
  }, [Page, input, Genre]);

  return (
    <>
      {/* Movies */}
      <div className="w-full pt-44 md:pt-24 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((item) => (
            <MoviesCard
              key={item.id}
              title={item.title}
              rating={item.vote_average}
              posterimg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full bg-blue-950 py-4 mt-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <button
            onClick={HandlePrev}
            className="h-10 px-6 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Previous
          </button>

          <span className="text-white text-lg font-semibold">
            Page {Page}
          </span>

          <button
            onClick={HandleNext}
            className="h-10 px-6 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Moviepage;