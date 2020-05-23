import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-headset"> Pistonheads</i>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profiles" className="nav-link">
          All Users
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/posts" className="nav-link">
          Posts
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!" className="nav-link">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-headset"> Pistonheads</i>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profiles" className="nav-link">
          All Users
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
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
