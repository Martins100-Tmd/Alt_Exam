import Info from "../context/Fetch";
import { useContext } from "react";
const Demo = () => {
  let { getmole, fore } = useContext(Info);
  let list;
  fore.length > 0
    ? (list = fore.map((item, index) => {
        return (
          <div
            className="rounded-sm shadow p-3 flex flex-col items-center w-full"
            key={index}
            id={item.id}
            onClick={(e) => getmole(e.target.id)}
          >
            <h1
              className="font-rob font-semibold text-10 text-center"
              id={index}
            >
              {item.name}
            </h1>
            <div
              className="w-4/5 rounded-full bg-violet-500 shadow h-20"
              id={item.id}
            ></div>
            <p
              className="font-rob font-semibold text-xs text-center"
              id={item.id}
            >
              {item.language}
            </p>
          </div>
        );
      }))
    : (list = "Error");
  return (
    <div className="grid sm:grid-cols-4 w-full gap-4 mt-5 grid-cols-2">
      {list}
    </div>
  );
};

export default Demo;
