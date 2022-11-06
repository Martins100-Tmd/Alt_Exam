import { useContext } from "react";
import Info from "../context/Fetch";
import { Link } from "react-router-dom";
function A() {
  throw new Error();
}
const Uno1 = () => {
  let { back, getmole, err } = useContext(Info);
  let list = back?.map((item, index) => {
    return (
      <Link
        className="flex flex-col items-center rounded-sm p-3 shadow"
        key={index}
        to={"/sole"}
        onClick={() => getmole(item.id)}
      >
        <div className="flex flex-col items-center w-full">
          <i className="fa">&#xf09b;</i>
          <p className="font-rob font-semibold text-xs uppercase">
            {item.name}
          </p>
        </div>
        <img
          className="rounded w-full h-28  border-2 border-violet-500 object-cover mt-2"
          alt="img"
          src={item.owner.avatar_url}
        ></img>
        <p className="font-rob font-semibold text-xs text-center uppercase">
          Repo {index + 13}
        </p>
      </Link>
    );
  });
  return (
    <div className="w-full mt-5">
      {err === 1 || back.length > 0 ? (
        <div className="grid gap-3 w-full grid-cols-1 md:grid-cols-3 shadow p-3 rounded-sm">
          {list}
        </div>
      ) : (
        <A />
      )}
    </div>
  );
};

export default Uno1;
