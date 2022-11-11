const HeadingTwo = (props) => {
  return (
    <div className="h2__wrapper flex items-center justify-left space-x-3 my-3">
      <h2 className="text-2xl font-extrabold capitalize">{props.title}</h2>
      {props.children}
    </div>
  );
};
export default HeadingTwo;
