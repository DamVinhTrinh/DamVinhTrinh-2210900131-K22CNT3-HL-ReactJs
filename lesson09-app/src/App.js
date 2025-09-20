import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <h1>Lesson09 - React Router Nâng Cao</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            isAuth ? <Dashboard /> : <Navigate to="/login" replace />
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
