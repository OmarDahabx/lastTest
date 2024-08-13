import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { CartProvider, useCart } from "react-use-cart";

import React from "react";

function NavBar() {
  const { totalItems } = useCart();

  return (
    <CartProvider>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <NavLink
            className="navbar-brand"
            to="/HomePage"
            activeClassName="active"
            exact
            smooth={true}
            offset={-100}
            duration={1000}
          >
            MobApp
          </NavLink>
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  className="nav-Link ml-2 ass"
                  to="device"
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >
                  Features <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link ml-2 ass"
                  to="download"
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Download
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-Link ml-2 ass" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-Link ml-2 ass" to="/ProductsPage">
                  Products
                </NavLink>
              </li>
              <li>
                <button className="btn boto ml-2">Send Feedback</button>
              </li>
              <li>
                <NavLink className="btn botoo ml-2" to="/Cart">
                  <i class="fa-solid fa-cart-shopping"></i> {totalItems}{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </CartProvider>
  );
}

export default NavBar;
