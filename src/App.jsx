import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Navbar
        setSidebarOpen={setSidebarOpen}
      />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

        </Routes>
      </main>
    </>
  );
}

export default App;