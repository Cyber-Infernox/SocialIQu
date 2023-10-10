import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./Context/AuthContext";
import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            // user ? <Home /> : <Navigate to="/login" />
          />
          <Route
            path="/login"
            element={<Login />}
            // !user ? <Login /> : <Navigate to="/" />
          />
          <Route
            path="/register"
            element={<Register />}
            // !user ? <Register /> : <Navigate to="/" />
          />
          <Route
            path="/profile/:username"
            element={<Profile />}
            // user ? <Profile /> : <Navigate to="/login" />
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
