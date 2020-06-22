import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "./Slider";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Slider />
      <div>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Free
                    </h5>
                    <h6 className="card-price text-center">
                    ₹0<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-block btn-primary text-uppercase"
                    >
                      Games
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Plus
                    </h5>
                    <h6 className="card-price text-center">
                    ₹249<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-block btn-dark text-uppercase"
                    >
                      Games
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Pro
                    </h5>
                    <h6 className="card-price text-center">
                    ₹499<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Games
                      </li>
                    </ul>
                    <Link
                      to="/"
                      className="btn btn-block btn-primary text-uppercase"
                    >
                      Games
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-section">
        <div className="container">
          <Link to="/" className="footer-logo">
            <span className="iconify" data-icon="fa-gamepad"></span>
            <span>PISTONHEADS</span>
          </Link>
          <div className="copyright">
            <Link to="/">PistonHeads</Link> 2020 @ All rights reserved
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

/*
<div classNameName="hero-slider owl-carousel">
          <div
            classNameName="hero-item set-bg d-flex align-items-center justify-content-center text-center"
            data-setbg={sliderBg4}
          >
            <div className="container">
              <h2>Game on!</h2>
              <p>Sample text</p>
              <a href="#" className="site-btn">
                LET's GO
                <img src={doubleArrow} alt="#" />
              </a>
            </div>
          </div>
        </div>

*/
