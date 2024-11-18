import React, { useState } from "react";
import "../../../src/css/registration.css";
type RegisterProps = {
  onClose: () => void;
};
const Registration = ({ onClose }: RegisterProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="registration-container">
      <form className="registration-form">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Register</h2>

        <label>Username</label>
        <input type="text" name="username" value={formData.username} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} required />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          required
        />

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
