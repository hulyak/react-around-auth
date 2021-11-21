import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Login = ({ handleLogin }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      return;
    }
    auth
      .authorize(user.username, user.password)
      .then((data) => {
        if (data.jwt) {
          setUser({ ...user, email: "", password: "" });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h2 className="login__title">Log in</h2>
      <form className="login__form">
        <label htmlFor="username">
          <input
            className="login__form-email"
            placeholder="Email"
            type="text"
            name="email"
            minLength={2}
            maxLength={40}
            required
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            className="login__form-password"
            placeholder="Password"
            type="password"
            name="password"
            minLength={2}
            maxLength={10}
            required
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button className="login__submit" type="submit">
          Log In
        </button>
      </form>
      <p className="login__text">
        Not a member yet?
        <Link to="/register" className="login__text_link">
          Sign up here!
        </Link>
      </p>
    </div>
  );
};

export default Login;
