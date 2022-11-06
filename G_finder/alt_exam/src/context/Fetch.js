import { createContext, useEffect, useState } from "react";
/**
 * Info context has been created
 */
const Info = createContext();
/**
 * InfoProvider - houses all function, states and values to be globally available to
 * all components
 * @children {object} : children here represents the components that will have the context under utility
 * @returns: a context provider
 */
export function InfoProvider({ children }) {
  /**
   * All state management utilities
   */
  let [fore, setfore] = useState([]);
  let [back, setback] = useState([]);
  let [sole, setsole] = useState([]);
  let [num, setnum] = useState(0);
  let [err, seterr] = useState(1);
  let [end, setend] = useState([]);
  /**
   * F - function to get/fetch all the github repos
   * Return: nothing
   */
  useEffect(() => {
    const URL = "https://api.github.com/users/Martins100-Tmd/repos";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const a = data?.slice(0, 12);
        const b = data?.slice(12, 24);
        const c = data?.slice(24, 30);
        setnum(a.length);
        setfore(a);
        setback(b);
        setend(c);
      })
      .catch((error) => seterr(0));
  }, [num]);
  /**
   * getmole - get the key/id of an individual repo
   * @param {*} mole: mole is passed, and it represents the id of the repo
   */
  const Top_five = () => {
    let all = fore.concat(back.concat(end)).slice(0, 5);
    return all;
  };
  const getmole = (mole) => {
    let all = fore.concat(back.concat(end));
    let Item = all.filter((item) => {
      return item.id === parseInt(mole);
    });
    setsole(Item);
    console.log(sole);
  };
  return (
    <Info.Provider value={{ back, fore, getmole, sole, end, Top_five, err }}>
      {children}
    </Info.Provider>
  );
}

export default Info;
