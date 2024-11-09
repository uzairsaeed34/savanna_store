import React from "react";
import { Link } from "react-router-dom";
import sliderBg1 from "../assets/img/slider/slider_bg01.jpg";
import sliderBanner1 from "../assets/img/slider/slider_banner_1.png";
import sliderBanner2 from "../assets/img/slider/slider_banner_3.png";
import sliderBanner3 from "../assets/img/slider/fresh_meat.png";

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

const SliderArea = () => {
  return (
    <section className="slider-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-7">
            <div className="slider-active">
              <div
                className="single-slider slider-bg"
                style={{ backgroundImage: `url(${sliderBg1})` }}
              >
                <div className="slider-content">
                  <h5
                    className="sub-title"
                    data-animation="fadeInUp"
                    data-delay=".2s"
                  >
                    top deal!
                  </h5>
                  <h2
                    className="title"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    organic food
                  </h2>
                  <Link
                    to="/grocery"
                    style={{ backgroundColor: "green" }}
                    className="btn rounded-btn"
                    data-animation="fadeInUp"
                    data-delay=".8s"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="slider-banner-img mb-20">
              <Link to="/grocery">
                <img src={sliderBanner1} alt="Banner 1" />
              </Link>
            </div>
            <div className="slider-banner-img">
              <Link to="/grocery">
                <img src={sliderBanner2} alt="Banner 2" />
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="slider-banner-img">
              <Link to="/meat">
                <img src={sliderBanner3} alt="Banner 3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderArea;
