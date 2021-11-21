import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/Logo.svg";

const Header = (props) => {
  const history = useHistory();

  function signOut() {
    props.handleLogout();
    localStorage.removeItem("jwt");
    history.push("/login");
  }
  return (
    <header className="header">
      <img src={logo} alt="Logo of Around the U.S" className="header__logo" />
      <button onClick={signOut}>Log out</button>
    </header>
  );
};

export default Header;
