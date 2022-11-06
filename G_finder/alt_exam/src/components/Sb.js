import Maui from "../Assets/Maui.png";
import { useContext } from "react";
import Theme from "../context/Theme";
import { Link } from "react-router-dom";
const Sidebar = () => {
  let { Colored, Themed, color, bg } = useContext(Theme);
  const Switch = () => {
    Colored();
    Themed();
  };
  document.querySelector("html").className = `${bg} ${color}`;
  return (
    <div className="flex sm:flex-col items-center p-3 sm:shadow w-full sm:h-screen flex-row mx-auto">
      <div className="sm:flex hidden sm:flex-row items-center justify-between w-full sm:mb-10">
        <a href="https://github.com/Martins100-Tmd">
          <i className="fa text-xl text-violet-600 sm:text-left text-center self-center w-full">
            &#xf09b;
          </i>
        </a>
        <i
          className="fa text-xl text-violet-600 inline cursor-pointer"
          onClick={() => Switch()}
        >
          &#xf0eb;
        </i>
      </div>
      <div className="grid grid-cols-4 w-full gap-1 sm:hidden -mt-10">
        <a href="https://github.com/Martins100-Tmd">
          <i className="fa text-xl text-violet-600 sm:text-left text-center self-center w-full shadow rounded p-2">
            &#xf09b;
          </i>
        </a>
        <i
          className="fa text-xl text-violet-600 inline cursor-pointer text-center shadow rounded p-2"
          onClick={() => Switch()}
        >
          &#xf0eb;
        </i>
        <Link
          to={"/"}
          className="flex flex-row items-center justify-between w-full shadow rounded p-2"
        >
          <i className="fa text-xl inline text-violet-600 sm:w-1/4 sm:text-left text-center self-center w-full">
            &#xf015;
          </i>
          <p className="font-rob font-semibold text-sm uppercase sm:inline hidden w-3/4">
            Home
          </p>
        </Link>
        <Link
          to={"/about"}
          className="flex flex-row items-center justify-between w-full shadow rounded p-2"
        >
          <i className="fa text-xl inline text-violet-600 sm:w-1/4 sm:text-left text-center self-center w-full">
            &#xf17b;
          </i>
          <p className="font-rob font-semibold text-sm uppercase sm:inline hidden w-3/4">
            About
          </p>
        </Link>
      </div>
      <div className="sm:flex flex-col items-center w-full sm:mb-16 hidden">
        <img
          src={Maui}
          alt="img"
          className="sm:w-24 sm:h-24 h-12 w-12 rounded-full self-center border-2
         border-violet-700 object-cover"
        />
        <h1 className="font-rob font-semibold text-base text-center uppercase">
          Martins Olumide
        </h1>
        <p className="font-rob text-xs text-violet-300 text-center">
          Software Engineer
        </p>
      </div>
      <div className="sm:flex hidden sm:flex-col items-center sm:w-full gap-5 flex-row">
        <Link
          to={"/"}
          className="flex flex-row items-center justify-between w-full"
        >
          <i className="fa text-xl inline text-violet-600 sm:w-1/4 sm:text-left text-center self-center w-full">
            &#xf015;
          </i>
          <p className="font-rob font-semibold text-sm uppercase sm:inline hidden w-3/4">
            Home
          </p>
        </Link>
        <div className="sm:flex flex-row items-center justify-between w-full hidden">
          <i className="fa text-xl inline text-violet-600 sm:w-1/4 sm:text-left text-center self-center w-full">
            &#xf18e;
          </i>
          <p className="font-rob font-semibold text-sm uppercase sm:inline hidden w-3/4">
            More
          </p>
        </div>
        <Link
          to={"/about"}
          className="flex flex-row items-center justify-between w-full hover:opacity-50"
        >
          <i className="fa text-xl inline text-violet-600 sm:w-1/4 sm:text-left text-center self-center w-full">
            &#xf17b;
          </i>
          <p className="font-rob font-semibold text-sm uppercase sm:inline hidden w-3/4">
            About
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
