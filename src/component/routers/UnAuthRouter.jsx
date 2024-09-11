import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Registration from "../login/Registration";

const UnAuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default UnAuthRouter;
