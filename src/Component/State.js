import React, { Component } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default class State extends Component {
  state = {
    itemCount: 1,
    itemPrice: 50,
    name: "Virat",
    validation: true,
    hidenshow: true,
    username: "",
  };
  render() {
    const AddtoCart = () => {
      //   console.log("hi");
      this.setState({
        itemCount: this.state.itemCount + 1,
      });
    };
    const RemovefromtheCart = () => {
      this.setState({
        itemCount:
          this.state.itemCount > 1
            ? this.state.itemCount - 1
            : this.state.itemCount,
      });
    };
    const ChangeName = () => {
      this.setState({
        name: "Virat Kohli",
      });
    };

    const ChangeText = () => {
      //   console.log("dark");
      this.setState({
        validation: this.state.validation === true ? false : true,
      });
    };
    const Hidenshow = () => {
      this.setState({
        hidenshow: this.state.hidenshow === true ? false : true,
      });
    };
    return (
      <>
        <h1>welcome</h1>
        <button className="btn btn-success" onClick={RemovefromtheCart}>
          -
        </button>
        <span> {this.state.itemCount}</span>
        <button className="btn btn-warning" onClick={AddtoCart}>
          +
        </button>

        <h1>{this.state.name}</h1>
        <button className="btn btn-danger" onClick={ChangeName}>
          Change the name
        </button>

        <button className="btn btn-info" onClick={ChangeText}>
          {this.state.validation ? "Dark" : "Light"}
        </button>

        {this.state.validation ? (
          <style>
            {`
            body{
            background:black;
            color:white;
            }`}
          </style>
        ) : (
          <style>
            {`body{
            background:white;
            color:black;
            }`}
          </style>
        )}
        <div className="container">
          <p>{this.state.username}</p>
          <form action="" className="w-50 d-flex align-items-center">
            <input
              type={this.state.hidenshow === true ? "password" : "text"}
              className="form-control"
              value={this.state.username}
              onChange={(e) => {
                this.setState({
                  username: e.target.value,
                });
              }}
            />

            <span onClick={Hidenshow}>
              {this.state.hidenshow === true ? <FaEyeSlash /> : <FaEye />}
            </span>
          </form>
        </div>
      </>
    );
  }
}
