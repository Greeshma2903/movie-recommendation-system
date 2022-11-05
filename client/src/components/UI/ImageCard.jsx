const ImageCard = (props) => {
  const classes=`img-card-size rounded-xl overflow-hidden` 
  return (
    <div className={classes}>
      <img src={props.source} className="object-cover h-64 w-44" />
    </div>
  );
};
export default ImageCard;
