import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <h1 className="text-3xl font-black text-white">Pick n Chill </h1>

      <ul className="flex justify-evenly items-center text-white font-semibold space-x-8 md:text-xl">
        <li>
          <NavLink to="/" className="hover:(border-b-2 border-white) mx-2 cursor-pointer border-transparent border-b-2">home.</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:(border-b-2 border-white) mx-2 cursor-pointer border-transparent border-b-2">contact.</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
