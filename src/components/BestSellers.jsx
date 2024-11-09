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
import img1 from "../assets/img/product/sp_products09.png";
import img2 from "../assets/img/product/sp_products02.png";
import img3 from "../assets/img/product/sp_products03.png";
import img4 from "../assets/img/product/sp_products04.png";
import img5 from "../assets/img/product/sp_products05.png";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <section className="best-sellers-area pt-75">
      <div className="container">
        <div className="row align-items-end mb-50">
          <div className="col-md-8 col-sm-9">
            <div className="section-title">
              <span className="sub-title">Best Sellers</span>
              <h2 className="title">Best Offers View</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <div className="section-btn text-left text-md-right">
              <Link to="grocery" className="btn">
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="best-sellers-products">
          <div className="row justify-content-center">
            {/* Product Items */}
            <div className="col-3">
              <ProductItem
                batch="New"
                imgSrc={img1}
                title="Uncle Orange Vanla Ready Pice"
                status="IN Stock"
              />
            </div>
            <div className="col-3">
              <ProductItem
                batch="15% discount"
                imgSrc={img2}
                title="Dannon Max Vanla ice cream"
                status="IN Stock"
              />
            </div>
            <div className="col-3">
              <ProductItem
                batch="25% discount"
                imgSrc={img3}
                title="Walnuts Max Vanla Greek Pice"
                status="IN Stock"
              />
            </div>
            <div className="col-3">
              <ProductItem
                batch="New"
                imgSrc={img4}
                title="Brachs Bens Vanla Ready Pice"
                status="IN Stock"
              />
            </div>
            <div className="col-3">
              <ProductItem
                batch="25% discount"
                imgSrc={img5}
                title="Black Lady Vanla Greek Grapes"
                status="IN Stock"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductItem = ({ batch, imgSrc, title, status, price }) => {
  return (
    <div className="sp-product-item mb-20">
      <div className="sp-product-thumb">
        <span className="batch">{batch}</span>
        <img src={imgSrc} alt={title} />
      </div>
      <div className="sp-product-content">
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h6 className="title">
          <a href="shop-details.html">{title}</a>
        </h6>
        <span className="product-status">{status}</span>
        <div className="sp-cart-wrap"></div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BestSellers;
