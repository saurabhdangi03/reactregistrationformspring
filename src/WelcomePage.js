import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens if necessary
    navigate("/login", { state: { message: "You have been logged out successfully." } });
  };

  return (
    <div className="container">
      <h2>Welcome</h2>
      {location.state && location.state.message && <p>{location.state.message}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
