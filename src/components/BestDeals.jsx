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
import img1 from "../assets/img/product/best_deal_product01.png";
import img2 from "../assets/img/product/best_deal_product02.png";
import img3 from "../assets/img/product/best_deal_product03.png";
import img4 from "../assets/img/product/best_deal_product04.png";
import img5 from "../assets/img/product/best_deal_product05.png";
import { Link } from "react-router-dom";

const BestDeals = () => {
  const products = [
    {
      id: 1,
      name: "Walnuts Max",
      imgSrc: img1,
    },
    {
      id: 2,
      name: "Fresh Nuts",
      imgSrc: img2,
    },
    {
      id: 3,
      name: "Fresh Butter",
      imgSrc: img3,
    },
    {
      id: 4,
      name: "Mat Orange",
      imgSrc: img4,
    },
    {
      id: 5,
      name: "France Potato",
      imgSrc: img5,
    },
  ];

  return (
    <section className="best-deal-area pt-60 pb-80">
      <div className="sp1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="best-deal-top-wrap">
                <div className="bd-section-title">
                  <h3 className="title">
                    Best Deals <span>of this Week!</span>
                  </h3>
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                </div>
                <div className="coming-time" data-countdown="2021/10/20"></div>
              </div>
            </div>
          </div>
          <div className="row best-deal-active">
            {products.map((product) => (
              <div className="col-xl-3" key={product.id}>
                <div className="best-deal-item">
                  <div className="best-deal-thumb">
                    <Link to="shop-details.html">
                      <img src={product.imgSrc} alt={product.name} />
                    </Link>
                  </div>
                  <div className="best-deal-content">
                    <div className="main-content">
                      <div className="rating">
                        {[...Array(5)].map((_, index) => (
                          <i className="fas fa-star" key={index}></i>
                        ))}
                      </div>
                      <h4 className="title">
                        <Link to="shop-details.html">{product.name}</Link>
                      </h4>
                    </div>
                    <div className="icon">
                      <Link to="shop-details.html">+</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
