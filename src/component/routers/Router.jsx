import React from "react";
import { Route, Routes } from "react-router-dom";
import AllConversion from "../conversion/AllConversion";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import Users from "../users/Users";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-conversion" element={<AllConversion />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Router;
