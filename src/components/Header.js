import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";

const Header = (props) => {
  const navigate = useNavigate();

  function signOut() {
    props.handleLogout();
    localStorage.removeItem("jwt");
    navigate("/login");
  }
  return (
    <header className="header">
      <img src={logo} alt="Logo of Around the U.S" className="header__logo" />
      <button onClick={signOut}>
        Log out
      </button>
    </header>
  );
};

export default Header;








