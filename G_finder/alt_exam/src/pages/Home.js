import Uno from "../components/Uno";
import Sidebar from "../components/Sb";
import Uno1 from "../components/Uno_";
import View from "../components/Overview";
import Uno2 from "../components/_Uno";
import { useReducer } from "react";
import ErrorBoundary from "../Error/ErrorBoundary";
function reducer(state, action) {
  switch (action.type) {
    case "A":
      return {
        page: (state.page = (
          <ErrorBoundary>
            <Uno />
          </ErrorBoundary>
        )),
      };
    case "B":
      return {
        page: (state.page = (
          <ErrorBoundary>
            <Uno1 />
          </ErrorBoundary>
        )),
      };
    case "C":
      return {
        page: (state.page = (
          <ErrorBoundary>
            <Uno2 />
          </ErrorBoundary>
        )),
      };
    default:
      throw new Error();
  }
}
const Home = () => {
  let [Pages, setPages] = useReducer(reducer, {
    page: <Uno />,
  });
  return (
    <div className="flex sm:flex-row items-stretch w-full gap-3 flex-col">
      <nav className="p-3 w-full text-center font-rob font-semibold text-2xl sm:shadow mb-2 sm:hidden inline">
        Github
      </nav>
      <div className="sm:w-1/5 w-full">
        <Sidebar />
      </div>
      <div className="flex flex-col sm:w-4/5 w-full">
        <nav className="p-3 w-full text-center font-rob font-semibold text-2xl sm:shadow mb-2 sm:inline hidden">
          Github
        </nav>
        <View />
        <div>{Pages.page}</div>
        <div className="flex flex-row items-start justify-between gap-3 sm:w-1/3 w-full mt-5 rounded shadow p-2">
          <button
            className="text-violet-600 rounded shadow block sm:w-1/3 mx-auto w-full
           font-rob text-sm p-2 text-center"
            onClick={() => setPages({ type: "A" })}
          >
            1
          </button>
          <button
            className="text-violet-600 rounded-sm block sm:w-1/3 mx-auto w-full
           font-rob text-sm p-2 text-center"
            value={"1"}
            onClick={() => setPages({ type: "B" })}
          >
            <i className="fa text-base">&#xf101;</i>
          </button>
          <button
            className="text-violet-600 rounded-sm block sm:w-1/3 mx-auto w-full
           font-rob text-sm p-2 text-center"
            value={"2"}
            onClick={() => setPages({ type: "C" })}
          >
            <i className="fa text-base">&#xf101;</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
