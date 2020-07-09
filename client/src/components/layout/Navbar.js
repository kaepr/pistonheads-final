import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [toggleNavbar, setToggleNavbar] = React.useState(false);

  const classOne = toggleNavbar
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";

  const classTwo = toggleNavbar
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const authLinks = (
    <nav
      className="navbar bg-dark navbar-dark navbar-expand-lg"
      role="navigation"
      aria-label="main navigation"
    >
      <Link className="navbar-brand" to="/">
        <i className="fas fa-gamepad"></i> <span>PISTONHEADS</span>
      </Link>

      <button
        onClick={() => {
          setToggleNavbar(!toggleNavbar);
        }}
        className={`${classTwo}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={`${classOne}`} id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/profiles">
              <i className="fas fa-user-circle"></i> <span>All Users</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/streaming">
              <i className="fas fa-user-circle"></i> <span>Streaming</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-user-circle"></i> <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/posts">
              <i className="fas fa-user-circle"></i> <span>Forum</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/recommend">
              <i className="fa fa-trophy"></i>
              {"  "}  <span>Recommend</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" onClick={logout} to="/">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav
      className="navbar bg-dark navbar-dark navbar-expand-lg"
      role="navigation"
      aria-label="main navigation"
    >
      <Link className="navbar-brand" to="/">
        <i className="fas fa-gamepad"></i> <span>PISTONHEADS</span>
      </Link>

      <button
        onClick={() => {
          setToggleNavbar(!toggleNavbar);
        }}
        className={`${classTwo}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={`${classOne}`} id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/profiles">
              <i className="fas fa-user-circle"></i> <span>All Users</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/recommend">
              <i className="fa fa-trophy"></i>
              {"  "}  <span>Recommend</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              <span>Login</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register">
              <span>Register</span>
            </Link>
          </li>
        </ul>
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
