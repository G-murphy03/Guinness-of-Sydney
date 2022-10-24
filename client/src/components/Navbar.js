import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <ul className="flex-row navbar-nav">
            <li className="nav">
              <Link to="/" className='links'>
                Home
              </Link>
            </li>
            <li className="nav">
              <Link to="/reviews" className='links'>
                Reviews
              </Link>
            </li>
            <li className="nav">
              <Link to="/locations" className='links'>
                Location
              </Link>
            </li>
            <li className="nav">
              <Link to="/reviewInput" className='links'>
                Submit a Review
              </Link>
            </li>
            <li className="nav">
              <Link to="/profile" className='links'>
                Profile
              </Link>
            </li>
            <li className="nav">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="flex-row navbar-nav">
            <li className="nav">
              <Link to="/" className='links'>
                Home
              </Link>
            </li>
            <li className="nav">
              <Link to="/reviews" className='links'>
                Reviews
              </Link>
            </li>
            <li className="nav">
              <Link to="/locations" className='links'>
                Location
              </Link>
            </li>
            <li className="nav">
              <Link to="/login" className='links'>
                Login
              </Link>
            </li>
            <li className="nav">
              <Link to="/signup" className='links'>
                Signup
              </Link>
            </li>
          </ul>
        );
      }
    }
  
    return (
      <header className="flex-row px-1">
        <h1 className="flex-row">
          <img
            src={require("../assets/guinness-of-sydney-logo.png")}
            alt="Guinness"
            className="logo"
          ></img>
        </h1>
  
        <nav className="flex-row">
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  export default Nav;