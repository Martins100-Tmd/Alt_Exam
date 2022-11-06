import React from "react";
import Err from "../Assets/Err.png";
import { Link } from "react-router-dom";
function Load() {
  setTimeout(() => {
    window.location.reload();
  }, 300);
}
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex flex-col items-center mx-auto bg-gradient-to-r w-1/2 shadow mt-10 p-5 from-violet-50 to-gray-50
         rounded-full"
        >
          <img src={Err} alt="Img" className="object-cover w-3/4" />
          <p className="font-rob font-semibold text-base text-center">
            Oops!, Something went wrong!
          </p>
          <Link
            to={"/"}
            className="text-blue-600 underline"
            onClick={() => Load()}
          >
            Go back?
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
