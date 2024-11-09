import React from "react";
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

const Coupon = () => {
  return (
    <div className="coupon-area gray-bg pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="coupon-bg">
              <div className="coupon-title">
                <span>Fresh Quality Guaranteed</span>
                <h3 className="title">Order Premium Meat Today</h3>
              </div>
              <div className="coupon-code-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
