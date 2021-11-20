import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import * as auth from "../utils/auth.js";


const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    calGoal: 1200
  });

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/diary");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      auth
        .register(user.username, user.password, user.email, user.calGoal)
        .then((res) => {
          if (res.statusCode !== 400) {
            navigate("/login");
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
      confirmPassword: "",
      calGoal: 1200
    });
  };

  return (
    <div className="register">
      <p className="register__welcome">Please register.</p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="calGoal">Daily calorie goal:</label>
        <select name="calGoal" value={user.calGoal} onChange={handleChange}>
          {/* {data.calData.map((item, i) => {
            return (
              <option value={item.id} key={i}>
                {item.calGoal}
              </option>
            );
          })} */}
        </select>
        <div className="register__button-container">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="register__link"
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="register__signin">
        <p>Already have an account??</p>
        <Link to="login" className="register__login-link">
          Log in here
        </Link>
      </div>
    </div>
  );
};

export default Register;