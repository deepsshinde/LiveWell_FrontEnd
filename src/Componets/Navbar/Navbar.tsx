import React from "react";
import './Navbar.css'; // Import your custom CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="navbar-container">
        {/* Left-aligned: Brand */}
        <a className="navbar-brand" href="#" style = {{color: '#68B2DC'}}>
          LiveWell
        </a>
        
        {/* Center-aligned: Navigation items */}
        <div className="center-nav-items">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" style = {{color:'#D1D1D1', fontFamily:'Rubik'}}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style = {{color:'#D1D1D1', fontFamily:'Rubik'}}>
                Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style = {{color:'#D1D1D1', fontFamily:'Rubik'}}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style = {{color:'#D1D1D1', fontFamily:'Rubik'}}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style = {{color:'#D1D1D1', fontFamily:'Rubik'}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        {/* Right-aligned: Search form */}
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
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
