import React, { Component } from "react";
// import { Container } from "react-bootstrap"
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const nav = useNavigate();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  function form() {
    return id && password;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", {
        id: id,
        password: password,
      })
      .then((response) => {
        if (id === "" || password === "") {
        } else if (
          id === response.data.id &&
          password === response.data.password
        ) {
          nav("/home");
        }
      })
      .catch((err) => {
        // console.log(err.response.data);
        alert("Erorr")
      });
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z1qQSwtKWl76KuEIBhaLIu5q95TZRiRq7w&usqp=CAU"
          height="100px"
        />

        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your ID`"
            value={id}
            onChange={(event) => setID(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox"></div>
        </div>

        <button
          type="submit"
          id="bg"
          className="btn btn- btn-block"
          value={form()}
        >
          Login
        </button>
      </form>
    </div>
  );
}
