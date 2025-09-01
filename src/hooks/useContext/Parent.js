import React, { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();
const data1 = createContext();

function Parent() {
  let name = "virat";
  let age = 1654;
  return (
    <>
      <h1>WELCOME TO THE USECONTEXT THIS IS FROM PARENT COMPONENT</h1>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <Child1 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default Parent;

export { data, data1 };
