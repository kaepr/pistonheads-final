import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/profiles">All Users</Link>
      </li>
      <li class="nav-item">
        <Link to="/posts">Posts</Link>
      </li>
      <li class="nav-item">
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li class="nav-item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/profiles" class="nav-link">
          All Users
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/register" class="nav-link">
          Register
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/login" class="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link">
            <i className="fas fa-headset"> Pistonheads</i>
          </Link>
        </li>
      </ul>
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
