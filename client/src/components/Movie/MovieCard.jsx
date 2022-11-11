import { useState, useContext } from "react";
import { HiStar } from "react-icons/hi";
import MoviePoster from "./MoviePoster";
import SearchContext from "../../helpers/search-context";
const MovieCard = (props) => {
  
  // Convert date to 'Month Year' form
  const releaseDate = `${props.release
    .toLocaleString("en-US", {
      month: "long",
    })
    .slice(0, 3)} ${props.release.getFullYear()}`;
    const SearchCtx = useContext(SearchContext)

    const cardClickHandler = () => {
      SearchCtx.searchMovie(props.title)
    }

  return (
    <div className="w-44 h-max">
      {/* MovieCard Poster */}
      <MoviePoster poster={props.poster} onMovieClick={cardClickHandler}/>
      
      {/* MovieCard Description */}
      <h3 className="my-1 text-xl font-bold">{props.title}</h3>
      <div className="flex items-center justify-between text-sm italic font-medium">
        <div className="rating__div flex items-start">
          <HiStar className="text-red-mild mr-1 text-lg" />
          <p className="text-gray-500">{props.rating}/10</p>
        </div>
        <p className="text-teal-bright">{releaseDate}</p>
      </div>
    </div>
  );
};
export default MovieCard;
