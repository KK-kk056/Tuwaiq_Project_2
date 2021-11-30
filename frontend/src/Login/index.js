
import axios from "axios";
import swal from 'sweetalert2'
import React, { useState } from "react";
import { useNavigate,} from "react-router-dom";

function Login() {
  const [nationalID, setNationalid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      nationalID: nationalID,
      password: password,
    };
    axios
      .post("/users/login", {
        nationalID: nationalID,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.nationalID);
        sessionStorage.setItem("userId", res.data.id);
        navigate("/home", { state: { id: res.data.id } });
        swal.fire(
          "You are logged in successfully",
          'You clicked the button!',
          'success'
        )
      
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      });
  }return (
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
            value={nationalID}
            onChange={(event) => setNationalid(event.target.value)}
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
          
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;