import React, { useReducer, useState } from "react";

const initialState = 0;
// let Price = 50;
const reducer = (state, action, price) => {
  switch (action) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;

    default:
      return state;
  }
};

function Red() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [price, setPrice] = useState(50);
  return (
    <>
      <h1>Price:{price * count}</h1>
      <button className="btn btn-danger" onClick={() => dispatch("Decrease")}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-success" onClick={() => dispatch("Increase")}>
        +
      </button>
    </>
  );
}

export default Red;
