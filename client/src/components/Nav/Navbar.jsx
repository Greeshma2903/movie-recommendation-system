const Navbar = () => {
  return (
    <>
      <h1 className="text-3xl font-black text-white">Pick n Chill </h1>

      <ul className="flex justify-evenly items-center text-white font-semibold space-x-8 md:text-xl">
        <li className="hover:(border-b-2 border-white) px-2 cursor-pointer border-transparent border-b-2">
          <a href="#">home.</a>
        </li>
        <li className="hover:(border-b-2 border-white) px-2 cursor-pointer border-transparent border-b-2">
          <a href="#">contact.</a>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
