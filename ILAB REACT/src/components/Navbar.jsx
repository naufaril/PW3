import React from 'react';
import { Link } from 'react-router-dom';
import ilab from "../assets/logo-ilab.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={ilab} alt="Logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT US</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
        <button type="button" className="btn btnsu btn-lg">SIGN UP</button>
        <button type="button" className="btn btnin btn-lg">LOG IN</button>
      </div>
    </nav>
  );
}

export default Navbar;
