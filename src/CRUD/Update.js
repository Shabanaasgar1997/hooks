import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let redirect = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("name"));
    setPassword(localStorage.getItem("pswd"));
  }, []);

  const UpdateTheItem = (e) => {
    e.preventDefault();
    axios
      .put(`https://68b57d2ee5dc090291af350d.mockapi.io/admindashboard/${id}`, {
        id: id,
        name: username,
        pswd: password,
      })
      .then(() => {
        alert("Updated Successfully");
        redirect("/read");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container">
        <form action="" className="w-50 mx-auto" onSubmit={UpdateTheItem}>
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="form-control"
            value={id}
            readOnly
            disabled
          />
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

export default Update;
