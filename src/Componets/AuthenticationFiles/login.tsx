import React, { useState } from "react";
import "../../../src/css/login.css"; // Import the CSS file for custom styling
import Registration from "./register";
type LoginProps = {
  onClose: () => void;
};

function Login({ onClose }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterClicked, setisRegisteredClicked] = useState(false);
  function handleRegisterClick(e: React.MouseEvent) {
    e.preventDefault();
    setisRegisteredClicked(true);
  }
  function closeRegister() {
    setisRegisteredClicked(false);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    alert("Login");
  };
  return (
    <>
      <div className="login-overlay">
        <div className="login-box">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button className="btn" onClick={handleRegisterClick}>
              New User
            </button>
          </form>
        </div>
      </div>
      {isRegisterClicked && <Registration onClose={closeRegister} />}
    </>
  );
}

export default Login;
