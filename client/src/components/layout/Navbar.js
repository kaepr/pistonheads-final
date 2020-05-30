import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isActive, setisActive] = React.useState(false);

  const authLinks = (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <i className="fas fa-gamepad"></i> <span>PISTONHEADS</span>
        </Link>

        <Link
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/streaming">
            <span>Streaming</span>
          </Link>
          <Link className="navbar-item" to="/profiles">
            <i className="fas fa-user-circle"></i> <span>All Users</span>
          </Link>
          <Link className="navbar-item" to="/dashboard">
            <span>Dashboard</span>
          </Link>
          <Link className="navbar-item" to="/posts">
            <span>Forum</span>
          </Link>
          <Link className="navbar-item" onClick={logout} to="/">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <i className="fas fa-gamepad"></i> <span>PISTONHEADS</span>
        </Link>

        <Link
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/profiles">
            <i className="fas fa-user-circle"></i> <span>All Users</span>
          </Link>
          <Link className="navbar-item" to="/login">
            <span>Login</span>
          </Link>
          <Link className="navbar-item" to="/register">
            <span>Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );

  return (
    !loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
