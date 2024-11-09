import React from "react";
import ingredientsImg from "../assets/img/images/ingredients_img.jpg"; // Adjust the path based on your structure
import awardIcon from "../assets/img/icon/ing_icon01.png"; // Adjust the path based on your structure
import volunteerIcon from "../assets/img/icon/ing_icon02.png"; // Adjust the path based on your structure
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
import { Link } from "react-router-dom";

const IngredientsSection = () => {
  return (
    <section className="ingredients-area pt-90 pb-90">
      <div className="container">
        <div className="ingredients-inner-wrap">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="ingredients-img">
                <img src={ingredientsImg} alt="Ingredients" />
                <div className="active-years">
                  <h2 className="title">
                    49+ <span>Years</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="ingredients-content-wrap">
                <div className="ingredients-section-title">
                  <span className="sub-title">Ingredients</span>
                  <h2 className="title">
                    Store Primarily Engaged in General Range
                  </h2>
                </div>
                <p>
                  Kamin ipsum is simply dummy the printing and typesetting
                  industry. Lorem ipsum has been the industry's standard dummy
                  ever since when unknown printer took galley.
                </p>
                <div className="ingredients-fact">
                  <ul>
                    <li>
                      <div className="icon">
                        <img src={awardIcon} alt="Awards Winner" />
                      </div>
                      <div className="content">
                        <h4>128+</h4>
                        <span>Awards Winner</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src={volunteerIcon} alt="Active Volunteers" />
                      </div>
                      <div className="content">
                        <h4>35k+</h4>
                        <span>Active Volunteers</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ingredients-btn-wrap">
                  <Link to="grocery" className="btn rounded-btn">
                    shop now
                  </Link>
                  <a href="index.html" className="store-link">
                    our Super Store <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
