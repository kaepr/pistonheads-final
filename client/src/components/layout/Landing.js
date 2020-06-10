import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import sliderBg4 from "./img/slider-bg-4.jpg";
import sliderBg2 from "./img/slider-bg-2.jpg";
import sliderBg1 from "./img/slider-bg-1.jpg";
import footerLeft from "./img/footer-left-pic.png";
import footerRight from "./img/footer-right-pic.png";
import doubleArrow from "./img/icons/double-arrow.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScriptTag from "react-script-tag";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
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
                    $0<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Checkout
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
                    $9<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      5 Users
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      50GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                  </ul>
                  <a href="#" className="btn btn-block btn-dark text-uppercase">
                    Checkout
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
                    $49<span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Users
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      150GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                  </ul>
                  <Link
                    to="/"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
