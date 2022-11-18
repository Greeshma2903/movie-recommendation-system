import MovieCard from "./MovieCard";
import SearchContext from "../../helpers/search-context";
import { useContext } from "react";

const MoviesContainer = (props) => {
  const SearchCtx = useContext(SearchContext);
  return (
    <div className="grid grid-cols-12-fit justify-items-center sm:justify-items-center gap-y-6">
      {props.movieList.map((movie, index) => {
        return (
          <MovieCard
            key={`${movie.id}_${index}`}
            title={movie.original_title}
            release={new Date(movie.release_date)}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        );
      })}
    </div>
  );
};
export default MoviesContainer;
