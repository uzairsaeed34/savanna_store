import React from "react";
import Slider from "react-slick";
import categoryImg1 from "../assets/img/product/category_img01.png";
import categoryImg2 from "../assets/img/product/category_img02.png";
import categoryImg3 from "../assets/img/product/category_img03.png";
import categoryImg4 from "../assets/img/product/category_img04.png";
import categoryImg5 from "../assets/img/product/category_img05.png";
import categoryImg6 from "../assets/img/product/category_img06.png";
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

const CategoryItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one item on mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container custom-container">
      <div className="slider-category-wrap">
        {/* Slider for mobile */}
        <div className="d-lg-none">
          {" "}
          {/* Only show on mobile */}
          <Slider {...settings}>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg1} alt="Juice & Drinks" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Juice & Drinks</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg2} alt="Vegetables" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Vegetables</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg3} alt="Fresh Nuts" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Fresh Nuts</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg4} alt="Cleaning" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Cleaning</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg5} alt="Fresh Meat" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Fresh Meat</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="category-item">
                <Link to="/grocery" className="category-link">
                  <div className="category-thumb">
                    <img src={categoryImg6} alt="Powders" />
                  </div>
                  <div className="category-content">
                    <h6 className="title">Powders</h6>
                  </div>
                </Link>
              </div>
            </div>
          </Slider>
        </div>

        {/* Grid layout for larger screens */}
        <div className="d-none d-lg-flex row category-active">
          {" "}
          {/* Only show on larger screens */}
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg1} alt="Juice & Drinks" />
                </div>
                <div className="category-content">
                  <h6 className="title">Juice & Drinks</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg2} alt="Vegetables" />
                </div>
                <div className="category-content">
                  <h6 className="title">Vegetables</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg3} alt="Fresh Nuts" />
                </div>
                <div className="category-content">
                  <h6 className="title">Fresh Nuts</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg4} alt="Cleaning" />
                </div>
                <div className="category-content">
                  <h6 className="title">Cleaning</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg5} alt="Fresh Meat" />
                </div>
                <div className="category-content">
                  <h6 className="title">Fresh Meat</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-item">
              <Link to="/grocery" className="category-link">
                <div className="category-thumb">
                  <img src={categoryImg6} alt="Powders" />
                </div>
                <div className="category-content">
                  <h6 className="title">Powders</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
