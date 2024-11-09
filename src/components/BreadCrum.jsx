import React from "react";
import { Link, useLocation } from "react-router-dom";
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

const Breadcrumb = () => {
  const location = useLocation(); // Hook to get the current path
  let title, breadcrumbText;

  // Set title and breadcrumb text based on the path
  switch (location.pathname) {
    case "/about":
      title = "About Us";
      breadcrumbText = "About Us";
      break;
    case "/grocery":
      title = "Grocery";
      breadcrumbText = "Grocery";
      break;
    case "/meat":
      title = "Meat Products";
      breadcrumbText = "Meat";
      break;
    case "/contact":
      title = "Contact Us";
      breadcrumbText = "Contact";
      break;
    default:
      title = "Page";
      breadcrumbText = "Page";
  }

  return (
    <section className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumbText}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
