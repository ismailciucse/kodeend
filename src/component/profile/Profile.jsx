import React from "react";
import Title from "../common/title/Title";
import placehoder from "./../../assets/img/placeholder.png";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Title title="Profile" />
      <div className="profile text-center">
        <img src={placehoder} alt="" />
        <p>12324</p>
        <p>Admin</p>
        <p>admin@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
