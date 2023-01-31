import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { handleLogout } from "../redux/actions/authAction";

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(handleLogout());
  };

  return (
    <div>
      <Navbar />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
