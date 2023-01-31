import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authAction, handleToken } from "../redux/actions/authAction";

const ProtectedRoute = () => {
  const { authReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  // part 1
  useEffect(() => {
    dispatch(handleToken());
  }, [authReducer.isLogin]);
  // console.log(authReducer);
  //part 2
  if (authReducer.loading) {
    return "loadiingggg";
  }

  //part 3
  return authReducer.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
