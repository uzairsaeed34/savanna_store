import React, { useEffect } from "react";
import meatProduct01 from "../assets/img/product/meat_products/breast.png";
import meatProduct02 from "../assets/img/product/meat_products/chicken-whole.png";
import meatProduct03 from "../assets/img/product/meat_products/beef-ground.png";
import meatProduct04 from "../assets/img/product/meat_products/goat-full.png";
import meatProduct05 from "../assets/img/product/meat_products/goat-leg.png";
import meatProduct06 from "../assets/img/product/meat_products/chicken-leg.png";
import meatProduct07 from "../assets/img/product/meat_products/beef-bone.png";
import meatProduct08 from "../assets/img/product/meat_products/beef-boti.png";
import meatProduct09 from "../assets/img/product/meat_products/lamb-goat-boneless.png";
import meatProduct10 from "../assets/img/product/meat_products/lamb-chops.png";
import meatProduct11 from "../assets/img/product/meat_products/lamb-gorund.png";
import meatProduct12 from "../assets/img/product/meat_products/beef-t-bone.png";
import meatProduct13 from "../assets/img/product/meat_products/beef-ground.png";
import meatProduct14 from "../assets/img/product/meat_products/goat-chops.png";
import meatProduct15 from "../assets/img/product/meat_products/wings.png";
import meatProduct16 from "../assets/img/product/meat_products/lamb_leg.png";
import meatProduct17 from "../assets/img/product/meat_products/lamb-shoulder.png";
import meatProduct18 from "../assets/img/product/meat_products/beef-ribs.png";
import meatProduct19 from "../assets/img/product/meat_products/beef-pasanda.png";
import meatProduct20 from "../assets/img/product/meat_products/lamb-goat-paya.png";
import meatProduct21 from "../assets/img/product/meat_products/drum-sticls.png";
import meatProduct22 from "../assets/img/product/meat_products/lamb-full.png";
import meatProduct23 from "../assets/img/product/meat_products/beef-paya.png";
import meatProduct24 from "../assets/img/product/meat_products/basa.png";
import meatProduct25 from "../assets/img/product/meat_products/chicken-leg.png";
import meatProduct26 from "../assets/img/product/meat_products/merinated-les.png";
import meatProduct27 from "../assets/img/product/meat_products/merinated-wings.png";
import meatProduct28 from "../assets/img/product/meat_products/rahu.png";
import meatProduct29 from "../assets/img/product/meat_products/goat-shoulder.png";

import specialProducts from "../assets/img/product/banner.png";

const products = [
  { id: 1, img: meatProduct01, title: "Chicken Breast (1lb)", price: "$9.75" },
  { id: 2, img: meatProduct02, title: "Chicken Whole (1lb)", price: "$5.75" },
  {
    id: 3,
    img: meatProduct03,
    title: "Beef Ground Regular (1lb)",
    price: "$7.99",
  },
  { id: 4, img: meatProduct04, title: "Goat Full (1lb)", price: "$16.49" },
  { id: 5, img: meatProduct05, title: "Goat Leg (1lb)", price: "$16.99" },
  { id: 6, img: meatProduct06, title: "Chicken Leg (1lb)", price: "$5.99" },
  { id: 7, img: meatProduct07, title: "Beef with Bone (1lb)", price: "$7.49" },
  { id: 8, img: meatProduct08, title: "Beef Boti (1lb)", price: "$11.99" },
  {
    id: 9,
    img: meatProduct09,
    title: "Lamb/Goat Boneless Clean (1lb)",
    price: "$19.49",
  },
  { id: 10, img: meatProduct10, title: "Lamb Chops (1lb)", price: "$15.99" },
  { id: 11, img: meatProduct11, title: "Lamb Ground (1lb)", price: "$18.99" },
  {
    id: 12,
    img: meatProduct12,
    title: "Beef T-Bone Steak (1lb)",
    price: "$11.49",
  },
  {
    id: 13,
    img: meatProduct13,
    title: "Beef Ground Lean (1lb)",
    price: "$12.49",
  },
  { id: 14, img: meatProduct14, title: "Goat Chops (1lb)", price: "$16.99" },
  { id: 15, img: meatProduct15, title: "Chicken Wings (1lb)", price: "$7.50" },
  { id: 16, img: meatProduct16, title: "Lamb Leg (1lb)", price: "$15.99" },
  { id: 17, img: meatProduct17, title: "Lamb Shoulder (1lb)", price: "$15.99" },
  { id: 18, img: meatProduct18, title: "Beef Ribs (1lb)", price: "$11.49" },
  { id: 19, img: meatProduct19, title: "Beef Pasanda (1lb)", price: "$10.99" },
  { id: 20, img: meatProduct20, title: "Lamb/Goat Paya", price: "$13.99" },
  { id: 21, img: meatProduct21, title: "Drum Sticks (1lb)", price: "$7.50" },
  { id: 22, img: meatProduct22, title: "Lamb Full", price: "$15.49" },
  { id: 23, img: meatProduct23, title: "Beef Paya (1lb)", price: "$7.99" },
  { id: 24, img: meatProduct24, title: "Basa Fish (1lb)", price: "$8.99" },
  {
    id: 25,
    img: meatProduct25,
    title: "Chicken Leg with Skin (1lb)",
    price: "$5.25",
  },
  {
    id: 26,
    img: meatProduct26,
    title: "Chicken Leg Marinated (1lb)",
    price: "$7.99",
  },
  {
    id: 27,
    img: meatProduct27,
    title: "Chicken Wings Marinated (1lb)",
    price: "$8.99",
  },
  { id: 28, img: meatProduct29, title: "Goat Shoulder (1lb)", price: "$16.99" },
  { id: 29, img: meatProduct28, title: "Rahu Fish (1lb)", price: "$7.99" },
];

const MeatItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="special-products-area gray-bg pt-75 pb-60">
      <div className="sp1">
        <div className="container">
          <div className="row align-items-end mb-50">
            <div className="col-md-8 col-sm-9">
              <div className="section-title">
                <span className="sub-title">Awesome Shop</span>
                <h2 className="title">All Meat Products</h2>
              </div>
            </div>
          </div>
          <div className="special-products-wrap">
            <div className="row">
              <div className="col-3 d-none d-lg-block">
                <div className="special-products-add">
                  <div className="sp-add-thumb">
                    <img src={specialProducts} alt="Special Products Add" />
                  </div>
                  <div className="sp-add-content">
                    <span className="sub-title">Healthy Meat</span>
                    <h1 className="title">
                      Fresh & Quality <b>Meat</b>
                    </h1>
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
                          <h6 className="title">
                            <a href="">{product.title}</a>
                          </h6>
                          <p>{product.price}</p>
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

export default MeatItems;
