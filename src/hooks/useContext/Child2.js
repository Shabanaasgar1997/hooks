import React, { useContext } from "react";
import Child3 from "./Child3";
import { data, data1 } from "./Parent";

function Child2() {
  let name = useContext(data);
  return (
    <>
      {name}
      <Child3 />
    </>
  );
}

export default Child2;
