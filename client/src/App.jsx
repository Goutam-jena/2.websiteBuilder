import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";
import WebsiteEditor from "./pages/Editor";
import LiveSite from "./pages/LiveSite";
import Pricing from "./pages/Pricing";
import useGetCurrentUser from "./hooks/useGetCurrentUser";

// ======================
// IMPORTANT: Send cookies to backend
// ======================
axios.defaults.withCredentials = true;

// Backend URL (Render)
export const serverUrl = "https://two-websitebuilder-wlj4.onrender.com";

function App() {
  useGetCurrentUser();

  const { userData } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/site/:id" element={<LiveSite />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={userData ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/generate"
          element={userData ? <Generate /> : <Navigate to="/" />}
        />

        <Route
          path="/editor/:id"
          element={userData ? <WebsiteEditor /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
