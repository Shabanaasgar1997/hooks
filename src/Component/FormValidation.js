import React, { Component } from "react";
import { MdError } from "react-icons/md";

export default class FormValidation extends Component {
  state = {
    username: "",
    password: "",
    isTrue: true,
  };
  render() {
    const Validate = (e) => {
      e.preventDefault();
      //   alert("welcome");
      console.log(this.state.username, this.state.password);
      if (this.state.isTrue === true) {
        this.setState({
          isTrue: false,
        });
      } else {
        this.setState({
          isTrue: true,
        });
      }
    };
    return (
      <>
        <div className="container">
          <form action="" className="w-50 mx-auto" onSubmit={Validate}>
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={(e) => {
                this.setState({
                  username: e.target.value,
                });
              }}
            />
            {this.state.isTrue === false ? (
              <p>Please Enter the Username </p>
            ) : (
              <p>{this.state.username}</p>
            )}
            <label htmlFor="">Password</label>

            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />

            {this.state.isTrue === false ? (
              <h1 className="text-danger">
                <MdError />
                Please enter the password
              </h1>
            ) : (
              <p>{this.state.password}</p>
            )}
            <input type="submit" value="Signin" className="btn btn-info" />
          </form>
        </div>
      </>
    );
  }
}
