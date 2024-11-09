import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/css/style.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/flaticon.css";
import "../assets/css/aos.css";
import "../assets/css/slick.css";
import "../assets/css/default.css";
import "../assets/css/responsive.css";
import img1 from "../assets/img/images/payment_card.png";
import logo from "../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area gray-bg pt-80 pb-30">
        <div className="container">
          <div className="row justify-content-between">
            {/* Footer Logo and Contact Section */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="footer-logo mb-25">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="footer-contact-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-place"></i>
                      </div>
                      <p>PO Box W75 Street West New Queens, TX 16819</p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-telephone-1"></i>
                      </div>
                      <h5 className="number">
                        <Link to="tel:12027993245">+120 279 932 45</Link>
                      </h5>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail"></i>
                      </div>
                      <p>
                        <Link to="/contact">[email&#160;protected]</Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-wall-clock"></i>
                      </div>
                      <p>Week 7 days from 7:00 to 20:00</p>
                    </li>
                  </ul>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Service Links */}
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title">
                  <h5 className="title">Customer Service</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/shop">Secure Shopping</Link>
                    </li>
                    <li>
                      <Link to="/cart">Order Status</Link>
                    </li>
                    <li>
                      <Link to="/shop">International Shipping</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Payment Method</Link>
                    </li>
                    <li>
                      <Link to="/blog">Our Blog</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Orders and Returns</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Track Your Orders</Link>
                    </li>
                    <li>
                      <Link to="/">Footer Links</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title">
                  <h5 className="title">Useful Links</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/checkout">Delivery</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Legal Notice</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Track Your Orders</Link>
                    </li>
                    <li>
                      <Link to="/">Footer Links</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Orders and Returns</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright-text">
                <p>
                  &copy; All Rights Reserved by Savanna Halal meat & grocery
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-accepted text-center text-md-right">
                <img src={img1} alt="Payment Cards" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
