import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/Logo.svg";

const Header = (props) => {
  const history = useHistory();

  const signOut = () => {
    props.handleLogout();
    localStorage.removeItem("jwt");
    history.push("/signin");
  };
  return (
    <header className="header">
      <img src={logo} alt="Logo of Around the U.S" className="header__logo" />
      <ul className="header__nav">
        <li>
          <p className="header__email">{props.userEmail}email@email.com</p>
        </li>
        <li>
          <button onClick={signOut} className="header__logout">
            Log out
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
