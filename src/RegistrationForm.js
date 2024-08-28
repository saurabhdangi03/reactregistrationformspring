import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";
// import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/users", formData);
      setMessage("User registered successfully!");
      setErrors({});
      navigate("/login", { state: { message: "Registration successful, please log in." } });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // If user is already registered, show a message and redirect to login page
        setMessage("Email already in use. Please log in.");
        setErrors({});
        navigate("/login", { state: { message: "Email already registered, please log in." } });
      } else if (error.response && error.response.data) {
        setErrors({ general: error.response.data });
      } else {
        setErrors({ general: "An error occurred" });
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
        {errors.general && <p>{errors.general}</p>}
        {message && <p>{message}</p>}
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default RegistrationForm;
