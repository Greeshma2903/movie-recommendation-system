import { AiTwotoneFire } from "react-icons/ai";
const Popular = () => {
  return (
    <section id="popular__movies">
      <div className="h2__wrapper flex items-center justify-left space-x-3 my-3">
        <h2 className="text-2xl font-extrabold">Popular Movies</h2>
        <AiTwotoneFire className="text-yellow-golden w-6 h-6" />
      </div>
    </section>
  );
};
export default Popular;
