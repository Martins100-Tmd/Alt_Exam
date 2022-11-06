import { useContext } from "react";
import Theme from "../context/Theme";
import Maui from "../Assets/Maui.png";
import { Link } from "react-router-dom";
const Main = () => {
  let { Colored, Themed, color, bg, btn } = useContext(Theme);
  const Switch = () => {
    Colored();
    Themed();
  };
  let text = bg === "bg-white" ? "Dark Mode" : "Light Mode";
  document.querySelector("html").className = `${bg} ${color}`;
  return (
    <div className="flex flex-col items-center w-95 sm:w-1/2 mx-auto mt-20">
      <nav className="flex flex-row items-center justify-between p-2 shadow rounded-sm w-full">
        <h1 className="font-rob font-semibold text-xl uppercase justify-between p-3">
          <i className="fa text-2xl text-violet-900 mr-2">&#xf17b;</i>
          DevFinder
        </h1>
        <button
          onClick={() => Switch()}
          className="bg-violet-600 rounded py-2 px-5 shadow font-rob text-sm font-semibold"
        >
          {text}
        </button>
      </nav>
      <main className="w-full flex flex-col p-3 shadow-xl rounded mt-4">
        <div className="flex md:flex-row items-center w-full justify-between flex-col">
          <div className="flex sm:flex-row items-center sm:w-1/2 justify-between w-2/3 flex-col">
            <img
              src={Maui}
              loading="lazy"
              alt="img"
              className="sm:w-24 sm:h-24 rounded-full object-cover sm:self-start border-2 w-14 h-14 border-violet-700 self-center"
            />
            <div className="flex flex-col sm:items-start items-center">
              <h2 className="text-lg text-start font-rob font-semibold">
                Martins Olumide
              </h2>
              <p className="font-rob text-xs text-violet-300 md:text-left text-center">
                Software engineer
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-right font-rob text-violet-300 sm:inline hidden">
              Friday 4th, November 2022
            </p>
            <p className="text-xs text-right font-rob text-violet-300 sm:hidden inline">
              04/11/22
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center w-full justify-evenly mt-5">
          <div className="flex flex-col items-center p-3 rounded-sm shadow w-full">
            <h1 className="font-rob font-semibold text-lg uppercase">
              Repositories
            </h1>
            <p className="font-rob text-sm text-center">30 Repositories</p>
          </div>
          <div className="flex flex-col items-center p-3 rounded-sm shadow w-full">
            <h1 className="font-rob font-semibold text-lg uppercase">
              Contributions
            </h1>
            <p className="font-rob text-sm text-center">990</p>
          </div>
          <div className="flex flex-col items-center p-3 rounded-sm shadow w-full">
            <h1 className="font-rob font-semibold text-lg uppercase">
              Total commits
            </h1>
            <p className="font-rob text-sm text-center">657 commits</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-full gap-5 items-center mt-5 grid-cols-1">
          <p className="font-rob text-xs shadow p-3 rounded-sm text-center">
            https://profiletmd.netlify.app
          </p>
          <p className="font-rob text-xs shadow p-3 rounded-sm text-center">
            https://github.com/Martins100-Tmd
          </p>
          <p className="font-rob text-xs shadow p-3 rounded-sm text-center">
            https://twitter.com/Martins8
          </p>
          <p className="font-rob text-xs shadow p-3 rounded-sm text-center">
            www.linkedin.com/in/martins100tmd
          </p>
        </div>
        <Link to={"/Home"} className="w-full">
          <button className={btn()}>Start!</button>
        </Link>
      </main>
    </div>
  );
};

export default Main;
