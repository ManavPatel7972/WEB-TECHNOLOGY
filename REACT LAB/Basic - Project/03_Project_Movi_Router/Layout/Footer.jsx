import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 position-relative mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">🎬 MovieZone</h4>
            <p>
              Unlimited movies, TV shows, and more. Enjoy your entertainment
              anywhere, anytime.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-light text-decoration-none"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-light text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movi"
                  className="text-light text-decoration-none"
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Support</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="#" className="text-light text-decoration-none">
                  FAQ
                </NavLink>
              </li>
              <li>
                <a to="#" className="text-light text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a to="#" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <NavLink to="#" className="text-light text-decoration-none">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3">
              <NavLink to="#" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </NavLink>
              <NavLink to="#" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </NavLink>
              <NavLink to="#" className="text-light fs-4">
                <i className="bi bi-twitter"></i>
              </NavLink>
              <NavLink to="#" className="text-light fs-4">
                <i className="bi bi-youtube"></i>
              </NavLink>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} MovieZone. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
