import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link to={"/"}>Homepage</Link>
      </p>
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/register"}>Register</Link>
      </p>
      <p>
        <Link to={"/discovery"}>Discovery</Link>
      </p>
    </div>
  );
};

export default Navbar;
