import React, { useState } from "react";
import Login from "../Componets/AuthenticationFiles/login";
<<<<<<< HEAD

function Navbar() {
  const [isLoginset, setLoginset] = useState(false);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the default action to avoid page reload
    setLoginset(true); // Opens the Login component
  };

  const handleCloseLogin = () => {
    setLoginset(false); // Closes the Login component
  };

=======
import AddRoom from "./AdminComponents/add_room";
function Navbar() {
  const [isLoginset, setLoginset] = useState(false);
  const [isRoomvisible, setRommvisible] = useState(false);
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the default action to avoid page reload
    setLoginset(true); // Opens the Login component
  };

  const handleCloseLogin = () => {
    setLoginset(false); // Closes the Login component
  };
  const handleRoom = () => {
    setRommvisible(true);
  };
>>>>>>> eaa2e992fb02ac02fa2a917468e96ef3161f7da7
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <a className="nav-link" href="#">
=======
              <a className="nav-link" href="#" onClick={handleRoom}>
>>>>>>> eaa2e992fb02ac02fa2a917468e96ef3161f7da7
                Admin
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
<<<<<<< HEAD
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
=======
                  About us
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Features
>>>>>>> eaa2e992fb02ac02fa2a917468e96ef3161f7da7
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn btn-outline-success ml-2 my-2 my-sm-0"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </form>
        </div>
        {isLoginset && <Login onClose={handleCloseLogin} />}
<<<<<<< HEAD
=======
        {isRoomvisible && <AddRoom />}
>>>>>>> eaa2e992fb02ac02fa2a917468e96ef3161f7da7
      </nav>
    </>
  );
}

export default Navbar;
