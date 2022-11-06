import { createContext, useState } from "react";

const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  let [color, setcolor] = useState("text-black");
  let [bg, setbg] = useState("bg-white");
  const Themed = () => {
    if (bg === "bg-white") {
      setbg("bg-slate-800");
    } else {
      setbg("bg-white");
    }
  };
  const Colored = () => {
    if (color === "text-black") {
      setcolor("text-white");
    } else {
      setcolor("text-black");
    }
  };
  const btn = () => {
    return "bg-violet-600 font-rob font-semibold text-sm p-3 rounded block w-full mt-3";
  };
  return (
    <Theme.Provider value={{ Themed, Colored, color, bg, btn }}>
      {children}
    </Theme.Provider>
  );
};
export default Theme;
