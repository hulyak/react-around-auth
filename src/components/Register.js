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

  const [message, setMessage] = useState("");

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
      auth.register(user.email, user.password).then((res) => {
        if (res) {
          history.push("/login");
          resetForm();
        } else {
          setMessage(res.message);
        }
      });
    }
  };

  const resetForm = () => {
    setUser({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="register">
      <p className="register__title">Sign Up</p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="email" className="register__form-field">
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="register__input"
          />
        </label>
        <label htmlFor="password" className="register__form-field">
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="register__input"
          />
        </label>
        <label htmlFor="confirmPassword" className="register__form-field">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
            className="register__input"
          />
        </label>

        <button
          type="submit"
          onSubmit={handleSubmit}
          className="register__button"
        >
          Sign up
        </button>
      </form>

      <div className="register__text">
        <p>Already a member?</p>
        <Link to="signin" className="login__link">
          Log in here!
        </Link>
      </div>
    </section>
  );
};

export default Register;
