import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authAction } from "../redux/actions/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    dispatch(authAction(payload));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRedirect = () => {
    if (!!authReducer.message) {
      navigate("/");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [authReducer.message]);

  return (
    <div>
      <Navbar />
      <h1>Login Admin</h1>
      <input placeholder="email" onChange={handleEmail} />
      <input placeholder="password" onChange={handlePassword} />
      <button onClick={handleLogin}>Login</button>
      <button>Logout</button>
    </div>
  );
};

export default Login;
