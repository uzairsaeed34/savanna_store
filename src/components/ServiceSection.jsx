import React from "react";
import { Link } from "react-router-dom";
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

const ServicesSection = () => {
  return (
    <section className="services-area services-bg">
      <div className="container">
        <div className="container-inner-wrap">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="services-section-title text-center mb-55">
                <h2 className="title">What We Provide?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link href="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-return"></i>
                </div>
                <div className="content">
                  <h5>
                    Easy Returns<span className="new">NEW</span>
                  </h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link to="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-delivery"></i>
                </div>
                <div className="content">
                  <h5>Free Delivery</h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link to="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-like-1"></i>
                </div>
                <div className="content">
                  <h5>Daily Deals Discount</h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link to="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-clutch-disc"></i>
                </div>
                <div className="content">
                  <h5>Automation</h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link to="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-settings"></i>
                </div>
                <div className="content">
                  <h5>
                    Database Software<span className="new">NEW</span>
                  </h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <Link to="/" className="services-link"></Link>
                <div className="icon">
                  <i className="flaticon-online-service"></i>
                </div>
                <div className="content">
                  <h5>Articles</h5>
                  <p>Knowledge base that organized collection system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
