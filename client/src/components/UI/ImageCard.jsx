import React from "react";

const ImageCard = (props) => {
  const classes = `h-64 w-44 rounded-xl overflow-hidden ${props.className}`;
  const imgBaseUrl = "https://image.tmdb.org/t/p/";
  let imgURL;
  if (props.source === "original/null")
    imgURL = "https://placeholder.pics/svg/300x400/E7FEFF/645656/Movie%20Image";
  else imgURL = `${imgBaseUrl}/${props.source}`;

  return (
    <div className={classes}>
      <img src={imgURL} className="object-cover h-64 w-44" />
    </div>
  );
};
export default React.memo(ImageCard);
