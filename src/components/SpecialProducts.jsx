import React from "react";
import specialProductsAdd from "../assets/img/product/special_products_add.jpg";
import spProduct01 from "../assets/img/product/sp_products01.png";
import spProduct02 from "../assets/img/product/sp_products02.png";
import spProduct03 from "../assets/img/product/sp_products03.png";
import spProduct04 from "../assets/img/product/sp_products04.png";
import spProduct05 from "../assets/img/product/sp_products05.png";
import spProduct06 from "../assets/img/product/sp_products06.png";
import spProduct07 from "../assets/img/product/sp_products07.png";
import spProduct08 from "../assets/img/product/sp_products08.png";
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
import { Link } from "react-router-dom";
const SpecialProducts = () => {
  const products = [
    {
      id: 1,
      img: spProduct01,
      title: "Uncle Bens Vanla Ready Pice",
      discount: null,
      status: "IN Stock",
    },
    {
      id: 2,
      img: spProduct02,
      title: "Dannon Max Vanla ice cream",
      discount: "15%",
      status: "IN Stock",
    },
    {
      id: 3,
      img: spProduct03,
      title: "Walnuts Max Vanla Greek Pice",
      discount: "25%",
      status: "IN Stock",
    },
    {
      id: 4,
      img: spProduct04,
      title: "Brachs Bens Vanla Ready Pice",
      discount: null,
      status: "IN Stock",
    },
    {
      id: 5,
      img: spProduct05,
      title: "Black Lady Vanla Greek Grapes",
      discount: "25%",
      status: "IN Stock",
    },
    {
      id: 6,
      img: spProduct06,
      title: "Potato Max Vanla Greek Pice",
      discount: null,
      status: "IN Stock",
    },
    {
      id: 7,
      img: spProduct07,
      title: "Uncle Bens Vanla Ready Pice",
      discount: "10%",
      status: "IN Stock",
    },
    {
      id: 8,
      img: spProduct08,
      title: "Organic Rice Max Greek Pice",
      discount: "10%",
      status: "IN Stock",
    },
  ];

  return (
    <section className="special-products-area gray-bg pt-75 pb-60 ">
      <div className="sp1">
        <div className="container">
          <div className="row align-items-end mb-50">
            <div className="col-md-8 col-sm-9">
              <div className="section-title">
                <span className="sub-title">Awesome Shop</span>
                <h2 className="title">Our Special Products</h2>
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
          <div className="special-products-wrap">
            <div className="row">
              <div className="col-3 d-none d-lg-block">
                <div className="special-products-add">
                  <div className="sp-add-thumb">
                    <img src={specialProductsAdd} alt="Special Products Add" />
                  </div>
                  <div className="sp-add-content">
                    <span className="sub-title">Healthy Food</span>
                    <h4 className="title">
                      Baby Favorite <b>Product</b>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row justify-content-center">
                  {products.map((product) => (
                    <div
                      className="col-xl-3 col-md-4 col-sm-6"
                      key={product.id}
                    >
                      <div className="sp-product-item mb-20">
                        <div className="sp-product-thumb">
                          {product.discount && (
                            <span className="batch discount">
                              {product.discount}
                            </span>
                          )}
                          <Link to="grocery">
                            <img src={product.img} alt={product.title} />
                          </Link>
                        </div>
                        <div className="sp-product-content">
                          <h6 className="title">
                            <Link to="grocery">{product.title}</Link>
                          </h6>
                          <span className="product-status">
                            {product.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
