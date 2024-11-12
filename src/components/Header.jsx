import React, { useState } from "react";
import { Link } from "react-router-dom"; // For client-side routing
import logo from "../assets/img/logo/logo.png"; // Adjust the path based on your folder structure
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

const Header = () => {
  // State to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when clicking close button
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div id="sticky-header" className="menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              {/* Hamburger Icon for mobile menu */}
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo d-block d-lg-none">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="header-category d-none d-lg-block">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/grocery">Grocery</Link>
                      </li>
                      <li>
                        <Link to="/meat">Meat</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul>
                      <li className="header-phone">
                        <div className="icon">
                          <i className="flaticon-telephone"></i>
                        </div>
                        <Link to="tel:+14034553758">
                          <span>Call Us Now</span>+1 403 455 3758
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div
                  className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
                >
                  <nav className="menu-box">
                    <div className="close-btn" onClick={closeMobileMenu}>
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                      <Link to="/" onClick={closeMobileMenu}>
                        <img src={logo} alt="Mobile Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <ul>
                        <li>
                          <Link to="/" onClick={closeMobileMenu}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about" onClick={closeMobileMenu}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/grocery" onClick={closeMobileMenu}>
                            Grocery
                          </Link>
                        </li>
                        <li>
                          <Link to="/meat" onClick={closeMobileMenu}>
                            Meat
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" onClick={closeMobileMenu}>
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              )}
              <div className="menu-backdrop" onClick={closeMobileMenu}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
