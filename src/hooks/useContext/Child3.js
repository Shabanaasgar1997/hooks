import React, { useContext } from "react";
import { data, data1 } from "./Parent";

function Child3() {
  console.log(data);
  let name = useContext(data);
  let age = useContext(data1);
  console.log(name);

  return (
    <>
      <p className="display-1">
        Welcome to the child3 component {name} {age}
      </p>
    </>
  );
}

export default Child3;
