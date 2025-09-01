import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function StateHook() {
  let x = "sdgfyusbfjbfhjf";
  const [count, setCount] = useState(x);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);
  const AddtoCart = () => {
    setCount(count + 1);
  };
  const ChangeCase = () => {
    console.log(name.toUpperCase());
    setName(name.toUpperCase());
  };

  const Validation = (e) => {
    e.preventDefault();
    console.log(name);
    if (isData === true) {
      setIsData(false);
    } else {
      setIsData(true);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Welcome {name}</h1>
        <form action="" className="mx-auto w-50" onSubmit={Validation}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {isData === false ? <p>Please enter the name</p> : <p>{name}</p>}

          <label htmlFor="">Password</label>
          <div className="d-flex align-items-center">
            <input
              type={isData === false ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => {
                setIsData(true);
              }}
            >
              {isData === true ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            className="btn btn-info my-lg-2"
            type="button"
            onClick={ChangeCase}
          >
            Uppercase
          </button>
          <input
            type="submit"
            value="Submit"
            className="btn btn-warning my-lg-2"
          />
        </form>
        <button
          className="btn btn-danger"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-success" onClick={AddtoCart}>
          +
        </button>
      </div>
    </>
  );
}

export default StateHook;
