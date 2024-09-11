import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../../assets/data/navLinks";
import "./sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  // Logout
  const logout = () => {
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <>
      <section className="sidebar">
        <div className="sidebar-top">
          <a
            href="http://localhost:3000/"
            title="Go Home Page"
            rel="noreferrer"
          >
            <h3>Logo</h3>
          </a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <ul className="nav-list">
              {navLinks.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
              <li className="nav-item">
                <NavLink className="nav-link sidebar-item" onClick={logout}>
                  <i className="ri-logout-circle-r-line"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
