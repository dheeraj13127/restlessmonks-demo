import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import "./css/Navbar.css";
import cart from "../../assets/cart.svg";
function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid">
          <a
            className="navbar-brand text-dark  navHeaderText d-flex align-items-center"
            href="/"
          >
            <img src={logo} alt="logo" className="navLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu className="text-light" />
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav p-2  nav d-flex align-items-center">
              <li className="nav-item mt-2">
                <a className=" nav-link" href="/">
                  USPs
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  PRICING
                </a>
              </li>
              <li className="nav-item nav-item-cart p-3 mt-2">
                <img src={cart} alt="" className="navbar-cart" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
