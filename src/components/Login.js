import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Login = ({ handleLogin }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

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
      .authorize(user.email, user.password)
      .then((data) => {
        if (data.jwt) {
          setUser({ email: "", password: "" });
          handleLogin();
          history.push("/profile");
        } else {
          setMessage("Invalid email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="login">
      <h2 className="login__title">Log in</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="login__form-field">
          <input
            className="login__input"
            placeholder="Email"
            type="email"
            name="email"
            minLength={2}
            maxLength={40}
            required
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="login__form-field">
          <input
            className="login__input"
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
        <button className="login__button" type="submit">
          Log In
        </button>
      </form>

      <p className="login__text">
        Not a member yet?
        <Link to="/register" className="login__link">
          Sign up here!
        </Link>
      </p>
    </section>
  );
};

export default Login;
