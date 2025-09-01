import React, { useCallback, useState } from "react";
import Two from "./Two";

function One() {
  const [count, setCount] = useState(1);

  const Decrease = () => {
    setCount(count - 1);
  };
  const Increase = () => {
    setCount(count + 1);
  };

  //   const Empty = () => {
  //     console.log("***********");
  //   };

  const Empty = useCallback(() => {}, []);
  return (
    <>
      <Two prop1={Empty()} />
      <h1>welcome to the use callback</h1>
      <button className="btn btn-danger" onClick={Decrease}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-success" onClick={Increase}>
        +
      </button>
    </>
  );
}

export default One;
