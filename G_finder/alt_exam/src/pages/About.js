import { Link } from "react-router-dom";
const AB = () => {
  return (
    <div className="flex flex-col items-center sm:w-1/2 mx-auto w-95 rounded-sm shadow p-5">
      <h1 className="font-rob font-semibold text-xl text-center shadow rounded p-2 w-full">
        AltSchool Second Term Exam(Project)
      </h1>
      <Link to={"/Home"} className="self-start">
        <i className="text-violet-600 fa text-2xl">&#xf190;</i>
      </Link>
      <p className="font-rob text-left p-3 rounded w-full shadow text-sm">
        Implement an API fetch of your GitHub portfolio, show a page with a list
        of all your repositories on GitHub(the page should implement pagination
        for the repo list), and create another page showing data for a single
        repo clicked from the list of repos using nested routes while using all
        the necessary tools in react. Implement the proper SEO, Error Boundary
        (show a page to test the error boundary) and 404 pages. Good UI and
        Designs are important.
      </p>
      <p className="font-rob font-semibold text-center w-full rounded shadow p-3">
        Martins Olumide😊✌✌✌
      </p>
      <a
        className="font-rob uppercase text-blue-300 text-center text-sm self-center shadow p-2 rounded"
        href="https://github.com/Martins100-Tmd/Alt_Exam"
      >
        https://github.com/Martins100-Tmd/Alt_Exam
      </a>
    </div>
  );
};

export default AB;
