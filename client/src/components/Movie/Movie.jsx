import ImageCard from "../UI/ImageCard";
import { HiStar } from "react-icons/hi";
import ImageHover from "../UI/ImageHover";

const Movie = (props) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  const releaseDate = `${props.release
    .toLocaleString("en-US", {
      month: "long",
    })
    .slice(0, 3)} ${props.release.getFullYear()}`;
  return (
    <div className="w-44">
      <div className="img__container relative img-card-size">
        {/* <ImageHover className="img__card__hover absolute top-0 z-50 hidden" /> */}
        {/* <ImageCard
          className="img__card absolute top-0 z-10"
          source={`https://i.picsum.photos/id/116/200/300.jpg?hmac=uPAnc-n8DQQ64MK4BNdh5H0jZftgEJ1sWpFPDBHni5o`}
        /> */}
        <ImageCard source={`${imgBaseUrl}original/${props.poster}`} />
      </div>
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
