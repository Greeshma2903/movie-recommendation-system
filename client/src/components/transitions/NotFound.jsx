import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 4000);

  return (
    <div className="border-red border-2 p-4">
      <h1>Oops! Seems like you've come the wrong way. Shoo shoo, go back 🪄</h1>
    </div>
  );
};

export default NotFound;
