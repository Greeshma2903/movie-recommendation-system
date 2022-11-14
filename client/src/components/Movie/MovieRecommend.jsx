import SearchSection from "../Search/SearchSection";
import MovieDetails from "./MovieDetails";
import MovieContainer from "./MoviesContainer";
import { useContext } from "react";
import SearchContext from "../../helpers/search-context";
import { useState } from "react";

const MovieRecommend = () => {
  // const [searchValid, setSearchValid] = useState(false);
  const resultsCtx = useContext(SearchContext);
  // if (resultsCtx.results.reqStatus !== "error") setSearchValid(true);
  // else setSearchValid(false);
  console.log(resultsCtx);
  return (
    <>
      <MovieDetails movie={resultsCtx.results.searchedMovie} />
      <MovieContainer movieList={resultsCtx.results.recommendMovies} />
    </>
  );
};

export default MovieRecommend;
