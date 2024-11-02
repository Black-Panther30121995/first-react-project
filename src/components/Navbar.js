// Navbar.js
import React from "react";
import PropTypes from "prop-types";
/* import { Link } from "react-router-dom"; */

export default function Navbar(props) {
  const colors = ["#452c63", "#720e9e", "#002D62", "#002244", "#007791"];

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
{/*               <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link> */}
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
{/*             <li className="nav-item">
              <Link to="/about" className="nav-link">
                {props.about}
              </Link>
            </li> */}
          </ul>
          <div className="d-flex align-items-center">
            {colors.map((color) => (
              <button
                key={color}
                className="but mx-1"
                onClick={() => props.changeBackgroundColor(color)} // Call the prop function
                style={{
                  backgroundColor: color,
                }}
              ></button>
            ))}
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  changeBackgroundColor: PropTypes.func.isRequired, // Ensure the prop is declared as required
};
