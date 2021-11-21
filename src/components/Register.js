import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push("/diary");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      auth.register(user.username, user.password, user.email).then((res) => {
        if (res.statusCode !== 400) {
          history.push("/login");
          resetForm();
        }
      });
    }
  };

  const resetForm = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <p className="register__welcome">Sign Up</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>

      <div className="register__signin">
        <p>Already a member? Log in here!</p>
        <Link to="login">Log in here</Link>
      </div>
    </>
  );
};

export default Register;
