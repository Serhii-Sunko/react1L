import React, { Component } from "react";
import { signUp } from "../../services/auth";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    // displayName: ""
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandlesSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(this.state);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandlesSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={this.onHandleChange}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={this.onHandleChange}
            value={password}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default Auth;
