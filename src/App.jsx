import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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

      <main>
        <h1>Dashboard</h1>
      </main>
    </>
  );
}

export default App;