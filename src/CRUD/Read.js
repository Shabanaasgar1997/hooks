import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://68b57d2ee5dc090291af350d.mockapi.io/admindashboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  });

  const DeleteTheItem = (item) => {
    console.log(item);
    if (window.confirm("r u sure u want to delete")) {
      axios
        .delete(
          `https://68b57d2ee5dc090291af350d.mockapi.io/admindashboard/${item}`
        )
        .then(() => alert("Successfully Deleted"))
        .catch((err) => console.log(err.message));
    }
  };

  const UpdateTheItem = (id, name, pswd) => {
    console.log(id, name, pswd);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("pswd", pswd);
  };
  return (
    <div>
      <button className="btn btn-info">
        <Link to="/">Create</Link>
      </button>
      <h1>Welcome to the Read Page</h1>

      <div className="container">
        <table className="table bg-warning table-bordered">
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>OPERATIONS</th>
          </tr>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.pswd}</td>
                  <td>
                    <button
                      className="btn bg-success"
                      onClick={() =>
                        UpdateTheItem(item.id, item.name, item.pswd)
                      }
                    >
                      <Link to="/update">Update</Link>
                    </button>
                    <button
                      className="btn bg-danger"
                      onClick={() => DeleteTheItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Read;
