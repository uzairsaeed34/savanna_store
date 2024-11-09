import React, { useEffect } from "react";
import spProduct01 from "../assets/img/product/sp_products01.png";
import spProduct02 from "../assets/img/product/sp_products02.png";
import spProduct03 from "../assets/img/product/sp_products03.png";
import spProduct04 from "../assets/img/product/sp_products04.png";
import spProduct05 from "../assets/img/product/sp_products05.png";
import spProduct06 from "../assets/img/product/sp_products06.png";
import spProduct07 from "../assets/img/product/sp_products07.png";
import spProduct08 from "../assets/img/product/sp_products08.png";
import spProduct09 from "../assets/img/product/milk_3.25.jpeg";
import spProduct10 from "../assets/img/product/bread_white.jpeg";
import spProduct11 from "../assets/img/product/astro_orignal_plain_yogurt.jpeg";
import spProduct12 from "../assets/img/product/egg_12pack.jpeg";
import spProduct13 from "../assets/img/product/shalimar_tanduri_naan.jpeg";
import spProduct14 from "../assets/img/product/unsalted_butter.jpeg";
import spProduct15 from "../assets/img/product/wipping_cream.jpeg";
import spProduct16 from "../assets/img/product/halal_yogurt_plain.jpeg";
import spProduct17 from "../assets/img/product/milk_2.jpeg";
import spProduct18 from "../assets/img/product/nanak_paneer.jpeg";

import specialProductsAdd from "../assets/img/product/special_products_add.jpg"; // Adjust the path as needed

// Sample data for grocery items
const products = [
  {
    id: 1,
    img: spProduct01,
    title: "Uncle Bens Vanla Ready Pice",
    discount: null,
    status: "In Stock",
  },
  {
    id: 2,
    img: spProduct02,
    title: "Dannon Max Vanla ice cream",
    status: "In Stock",
  },
  {
    id: 3,
    img: spProduct03,
    title: "Walnuts Max Vanla Greek Pice",
    status: "In Stock",
  },
  {
    id: 4,
    img: spProduct04,
    title: "Brachs Bens Vanla Ready Pice",
    status: "In Stock",
  },
  {
    id: 5,
    img: spProduct05,
    title: "Black Lady Vanla Greek Grapes",
    status: "In Stock",
  },
  {
    id: 6,
    img: spProduct06,
    title: "Potato Max Vanla Greek Pice",
    discount: null,
    status: "In Stock",
  },
  {
    id: 7,
    img: spProduct07,
    title: "Uncle Bens Vanla Ready Pice",
    status: "In Stock",
  },
  {
    id: 8,
    img: spProduct08,
    title: "Organic Rice Max Greek Pice",
    status: "In Stock",
  },
  {
    id: 9,
    img: spProduct09,
    title: "Milk 3.25%",
    status: "In Stock",
  },
  {
    id: 10,
    img: spProduct10,
    title: "Bread (white)",
    status: "In Stock",
  },
  {
    id: 11,
    img: spProduct11,
    title: "Astro Orignal Plain Yogurt",
    status: "In Stock",
  },
  {
    id: 12,
    img: spProduct12,
    title: "Eggs 12 Pack",
    status: "In Stock",
  },
  {
    id: 13,
    img: spProduct13,
    title: "Shalimar Tandoori Naan (5pcs)",
    status: "In Stock",
  },
  {
    id: 14,
    img: spProduct14,
    title: "Unsalted Butter",
    status: "In Stock",
  },
  {
    id: 15,
    img: spProduct15,
    title: "Whipping Cream (1lr)",
    status: "In Stock",
  },
  {
    id: 16,
    img: spProduct16,
    title: "Halal Yogurt Plain",
    status: "In Stock",
  },
  {
    id: 17,
    img: spProduct17,
    title: "Milk 2%",
    status: "In Stock",
  },
  {
    id: 18,
    img: spProduct18,
    title: "Nanak Paneer (341g)",
    status: "In Stock",
  },
];

const GroceryItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="special-products-area gray-bg pt-75 pb-60 ">
      <div className="sp1">
        <div className="container">
          <div className="row align-items-end mb-50">
            <div className="col-md-8 col-sm-9">
              <div className="section-title">
                <span className="sub-title">Awesome Shop</span>
                <h2 className="title">All Products</h2>
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
                          <img src={product.img} alt={product.title} />
                        </div>
                        <div className="sp-product-content">
                          <h6 className="title">{product.title}</h6>
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

export default GroceryItems;
