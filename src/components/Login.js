import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // setUser((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
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
    <>
      <p>Log in</p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          required
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Log in
          </button>
        </div>
      </form>

      <div>
        <p>Not a member yet? </p>
        <Link to="/register">Sign up here!</Link>
      </div>
    </>
  );
};

export default Login;
