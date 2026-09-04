import React from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiUser,
} from "react-icons/fi";

import "./Navbar.css";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>

        <div className="search-box">
          <FiSearch />

          <input
            type="text"
            placeholder="Search..."
          />
        </div>

      </div>


      {/* Right Side */}
      <div className="navbar-right">

        {/* Notification */}
        <button className="navbar-icon">
          <FiBell />
          <span className="notification-dot"></span>
        </button>


        {/* User */}
        <div className="navbar-user">

          <div className="user-avatar">
            A
          </div>

          <div className="user-info">
            <h4>Admin</h4>
            <span>Welcome back</span>
          </div>

        </div>

        <FiUser className="user-mobile-icon" />

      </div>

    </header>
  );
};

export default Navbar;