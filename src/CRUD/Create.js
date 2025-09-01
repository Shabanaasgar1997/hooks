import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let URL = "https://68b57d2ee5dc090291af350d.mockapi.io/admindashboard";

  let Navigate = useNavigate();

  const SenddatatoAPI = (e) => {
    e.preventDefault();
    console.log(username, password);

    axios
      .post(URL, {
        name: username,
        pswd: password,
      })
      .then(() => {
        alert("Account Created Successfully");
        Navigate("/read");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container">
        <form action="" className="w-50 mx-auto" onSubmit={SenddatatoAPI}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="submit"
            className="btn btn-warning my-lg-2 mx-auto d-flex"
          />
        </form>
      </div>
    </>
  );
}

export default Create;
