import axios from "axios";
import { useEffect } from "react";

export const authAction = (payload) => (dispatch) => {
  axios
    .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.access_token);
      dispatch({
        type: "LOGIN",
        payload: true,
      });
    })
    .catch((err) => console.log(err));
};

export const handleLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: "LOGOUT",
    payload: false,
  });
};

export const handleToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch({
      type: "CHECK_TOKEN",
      payload: {
        isLogin: false,
        loading: false,
      },
    });
  } else {
    dispatch({
      type: "CHECK_TOKEN",
      payload: {
        isLogin: true,
        loading: false,
      },
    });
  }
};
