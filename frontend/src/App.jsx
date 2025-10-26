import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import TodoDashboard from "./pages/TodoDashboard"; // your existing App UI
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      <Router>
        <Routes>
          {/* Default route — if logged in, go to dashboard, else login */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Login page */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Protected dashboard */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <TodoDashboard setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
