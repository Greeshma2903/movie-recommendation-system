import { useState } from "react";
import ImageCard from "../UI/ImageCard";
import { HiStar } from "react-icons/hi";
import ImageHover from "../UI/ImageHover";

const Movie = (props) => {
  const [hover, setHover] = useState(false);
  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  
  // Convert date to 'Month Year' form
  const releaseDate = `${props.release
    .toLocaleString("en-US", {
      month: "long",
    })
    .slice(0, 3)} ${props.release.getFullYear()}`;

  return (
    <div className="w-44 h-max">
      {/* Movie Poster */}
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
        />

        <ImageCard
          source={`${imgBaseUrl}original/${props.poster}`}
          className="absolute top-0 left-0 right-0 -z-10"
        />
      </div>
      {/* Movie Description */}
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
export default Movie;
