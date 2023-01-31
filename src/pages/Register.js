import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { regisAction } from "../redux/actions/regisAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { regisReducer } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegis = () => {
    const payload = {
      email: email,
      password: password,
      role: "Admin",
    };
    dispatch(regisAction(payload));
  };

  useEffect(() => {
    handleRedirect();
  }, [regisReducer.message]);

  const handleRedirect = () => {
    setTimeout(() => {
      if (!!regisReducer.message.length) {
        navigate("/login");
      }
      dispatch({
        type: "REMOVE_MESSAGE",
        payload: "",
      });
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <h1>Register Admin</h1>
      <input placeholder="email" onChange={handleEmail} />
      <input placeholder="password" onChange={handlePassword} />
      <button onClick={handleRegis}>Register</button>
      {regisReducer.message.length ? <h1>Berhasil</h1> : null}
    </div>
  );
};

export default Register;
