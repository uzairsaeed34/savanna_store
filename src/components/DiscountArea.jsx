import React from "react";
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
import img1 from "../assets/img/product/s_discount_img01.jpg";
import img3 from "../assets/img/product/s_discount_img02.jpg";
import img2 from "../assets/img/product/s_product_disc.png";
import { Link } from "react-router-dom";

const DiscountStyleTwo = () => {
  return (
    <section className="discount-style-two pt-60 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <DiscountItem
              imgSrc={img1}
              category="Healthy Food"
              title="Organic Fresh Farm Products"
              offer="Explore a wide range of fresh organic produce, straight from the farm to your table."
              link="grocery"
            />
          </div>
          <div className="col-lg-6">
            <DiscountItem
              imgSrc={img2}
              category="Raw Fresh Meat"
              title="Premium Baby Favorite Cuts"
              offer="Tender, fresh cuts of raw meat, perfect for healthy and delicious meals."
              link="meat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DiscountItem = ({ imgSrc, category, title, offer, link }) => {
  return (
    <div className="discount-item-two">
      <div className="discount-thumb">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="discount-content">
        <span>{category}</span>
        <h4 className="title">
          <a href={link}>{title}</a>
        </h4>
        <p>{offer}</p>
        <Link to={link} className="btn rounded-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default DiscountStyleTwo;
