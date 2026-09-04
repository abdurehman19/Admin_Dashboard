import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiPackage,
  FiUsers,
  FiShoppingCart,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FiPackage />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <FiUsers />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <FiShoppingCart />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">A</div>

          <div className="logo-text">
            <h2>Admin</h2>
            <span>Dashboard</span>
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <p className="menu-title">MENU</p>

          <nav>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">{item.icon}</span>

                <span className="sidebar-link-text">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Menu */}
        <div className="sidebar-bottom">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sidebar-icon">
              <FiSettings />
            </span>

            <span className="sidebar-link-text">Settings</span>
          </NavLink>

          <button className="sidebar-logout">
            <span className="sidebar-icon">
              <FiLogOut />
            </span>

            <span className="sidebar-link-text">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;