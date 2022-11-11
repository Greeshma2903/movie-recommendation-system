import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Popular from "./components/PopularMovies/Popular";
import Contact from "./components/Contact/Contact";
import SearchSection from "./components/Search/SearchSection";
import MovieRecommend from "./components/Movie/MovieRecommend";

function App() {
  const navRoot = document.getElementById("nav-root");
  const [popularMovies, setPopularMovies] = useState([]);

  // Fetch popular movies from server
  async function fetchPopularMovies() {
    const res = await fetch("http://localhost:1300/");
    const popularMoviesData = await res.json();
    // Save movies to state variable
    setPopularMovies(
      popularMoviesData.map((movieObjects) => {
        return movieObjects.results[0];
      })
    );
  }

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      {ReactDOM.createPortal(<Navbar />, navRoot)}

      <Routes>
        <Route path="/" element={<Popular movieList={popularMovies} />} />
          <Route path="/movie" element={<MovieRecommend />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
