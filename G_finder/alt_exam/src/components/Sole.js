import { useContext } from "react";
import { Link } from "react-router-dom";
import Err from "../Assets/Err.png";
import Info from "../context/Fetch";
function Load() {
  setTimeout(() => {
    window.location.reload();
  }, 300);
}
const Sole = () => {
  let { sole, Top_five, err } = useContext(Info);
  console.log(sole);
  let list = Top_five().map((item, index) => {
    return (
      <a
        href={item.html_url}
        className="text-violet-500 font-rob text-sm text-left rounded-sm p-2
            shadow w-full"
        key={index}
      >
        {item.name}
      </a>
    );
  });
  return (
    <div className="flex flex-col items-center sm:w-3/4 w-full mx-auto">
      <div className="bg-violet-900 p-4 rounded-sm w-full flex flex-row items-center">
        <Link to={"/home"} className="mr-4">
          <i className="text-violet-600 fa text-2xl self-start">&#xf190;</i>
        </Link>
        <p className="font-rob font-semibold text-left self-start mt-1">
          Github Page
        </p>
      </div>
      {err === 1 && sole.length > 0 ? (
        <div className="shadow rounded p-5 flex flex-col items-center">
          <div className="flex sm:flex-row items-center w-full flex-col">
            <div className="flex flex-col sm:items-start rounded shadow p-3 sm:w-45 w-full">
              <img
                src={sole[0].owner.avatar_url}
                alt="img"
                className="object-cover rounded shadow"
              />
              <a
                href="https://github.com/Martins100-Tmd"
                className="w-full block"
              >
                <button className="bg-violet-600 p-2 rounded-sm font-rob text-sm shadow block w-full mt-3 font-semibold">
                  View profile
                </button>
              </a>
            </div>
            <div className="flex flex-col items-center sm:w-55 w-full">
              <div className="flex flex-col items-center rounded shadow p-3 w-full">
                <div className="flex flex-col items-start w-full justify-between gap-2 p-5 rounded shadow">
                  <p className="p-2 shadow w-full font-semibold uppercase rounded">
                    Visibility :
                    <span className="bg-orangered-600 p-1 rounded text-sm">
                      {sole[0].visibility}
                    </span>
                  </p>
                  <p className="p-2 shadow w-full font-semibold uppercase rounded">
                    Forks :
                    <span className="bg-orangered-600 p-1 rounded text-sm">
                      {sole[0].forks}
                    </span>
                  </p>
                  <p className="p-2 shadow w-full font-semibold uppercase rounded">
                    Size :
                    <span className="bg-orangered-600 p-1 rounded text-sm">
                      {sole[0].size}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-start rounded p-5 w-full shadow gap-3 mt-3">
                  <p className="text-xs font-rob font-semibold text-left w-full shadow rounded p-2 uppercase">
                    Name:{" "}
                    <span className="bg-violet-300 ml-4 rounded-sm p-1">
                      {sole[0].name}
                    </span>
                  </p>
                  <p className="text-xs font-rob font-semibold text-left w-full shadow rounded p-2 uppercase">
                    Default Branch:{" "}
                    <span className="bg-violet-300 ml-4 rounded-sm p-1">
                      {sole[0].default_branch}
                    </span>
                  </p>
                  <p className="text-xs font-rob font-semibold text-left w-full shadow rounded p-2 uppercase">
                    Language:{" "}
                    <span className="bg-violet-300 ml-4 rounded-sm p-1">
                      {sole[0].language}
                    </span>
                  </p>
                  <p className="text-xs font-rob font-semibold text-left w-full shadow rounded p-2 uppercase">
                    Username:{" "}
                    <span className="bg-violet-300 ml-4 rounded-sm p-1">
                      {sole[0].owner.login}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-3 p-5 rounded shadow">
            <h1 className="font-pop font-semibold text-2xl text-left self-start uppercase">
              Latest Repo
            </h1>
            <div className="flex flex-col items-start w-full rounded shadow p-3 gap-5">
              {list}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center mx-auto bg-gradient-to-r w-1/2 shadow mt-10 p-5 from-violet-50 to-gray-50
         rounded-full"
        >
          <img src={Err} alt="Img" className="object-cover w-3/4" />
          <p className="font-rob font-semibold text-base text-center">
            Nothing to display!
          </p>
          <Link
            to={"/Home"}
            className="text-blue-600 underline"
            onClick={() => Load()}
          >
            Go back?
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sole;
