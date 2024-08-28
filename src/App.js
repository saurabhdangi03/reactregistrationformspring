import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import WelcomePage from "./WelcomePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
