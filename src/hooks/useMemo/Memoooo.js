import React, { useMemo, useState } from "react";

function Memoooo() {
  const [count, setCount] = useState(1);

  const Decrease = () => {
    setCount(count - 1);
  };
  const Increase = () => {
    setCount(count + 1);
  };

  //   const Multiply = () => {
  //     console.log("*******************");
  //   };
  const Multiply = useMemo(() => {
    console.log("**********");
  }, []);
  return (
    <>
      {Multiply}
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

export default Memoooo;
