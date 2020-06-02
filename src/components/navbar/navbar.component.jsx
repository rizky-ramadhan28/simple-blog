import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import Loading from "../../pages/loading/loading.component";

import { NavbarContext } from "../../contexts/navbar-context/navbar.context";

import "./navbar.styles.css";

const Navbar = ({ location: { pathname } }) => {
  const isActiveClass = (pathname, navlinkUrl) => {
    return pathname === navlinkUrl ? "active" : "";
  };

  const { loading, currentImage } = useContext(NavbarContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            My Blog
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActiveClass(pathname, "/")}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActiveClass(pathname, "/about")}`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {loading ? (
        <Loading />
      ) : (
        <img
          className="img-fluid image-header"
          src={currentImage}
          alt="header"
        />
      )}
    </>
  );
};

export default withRouter(Navbar);
