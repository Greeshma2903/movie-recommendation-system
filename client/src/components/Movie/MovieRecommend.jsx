import SearchSection from "../Search/SearchSection";
import MovieDetails from "./MovieDetails";
import MovieContainer from "./MoviesContainer";
import { useContext } from "react";
import SearchContext from "../../helpers/search-context";
import { useState } from "react";
import HeadingTwo from "../UI/HeadingTwo";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const MovieRecommend = () => {
  // const [searchValid, setSearchValid] = useState(false);
  const resultsCtx = useContext(SearchContext);

  // return back to home on page reload
  if (resultsCtx.results.searchedMovie === null) return <Navigate to="/" />;

  // reset loading animation
  useEffect(() => {
    setTimeout(() => {
      resultsCtx.dataLoading(false);
    }, 3000)
  }, [resultsCtx.results]);

  const recommendedMovies = resultsCtx.results.recommendMovies.map(
    (movieObjects) => {
      return movieObjects.results[0];
    }
  );
  console.log(resultsCtx);
  return (
    <>
      <SearchSection />
      <MovieDetails movie={resultsCtx.results.searchedMovie} />
      <HeadingTwo title="Recommended Movies" />
      <MovieContainer movieList={recommendedMovies} />
    </>
  );
};

export default MovieRecommend;
