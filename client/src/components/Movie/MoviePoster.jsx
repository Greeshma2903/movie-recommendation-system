import ImageHover from "./ImageHover";
import ImageCard from "../UI/ImageCard";
import { useState } from "react";

const MoviePoster = (props) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  const [hover, setHover] = useState(false);

  return (
    <div
      className="img__container relative img-card-size"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setHover(false);
        }, 300);
      }}
    >
      <ImageHover
        className={`img__card__hover absolute top-0 left-0 right-0 z-50 transition-all ease-in delay-100 ${
          hover ? "visible" : "hidden"
        }`}
        clickHandler={props.onMovieClick}
      />

      <ImageCard
        source={`${imgBaseUrl}original/${props.poster}`}
        className="absolute top-0 left-0 right-0 -z-10"
      />
    </div>
  );
};

export default MoviePoster;
