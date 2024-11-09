import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/images/contact_img.png";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    // You can add your form submission logic here
  };

  return (
    <section className="contact-area pt-90 pb-90">
      <div className="container">
        <div className="container-inner-wrap">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-8 order-2 order-lg-0">
              <div className="contact-title mb-25">
                <h5 className="sub-title">Contact Us</h5>
                <h2 className="title">
                  Let's Talk Question<span>.</span>
                </h2>
              </div>
              <div className="contact-wrap-content">
                <p>
                  Making for software espially of the relating espeially of the
                  face costa when unknown galley of type and scrambled.
                </p>
                <form
                  action="#"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-grp">
                    <label htmlFor="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Jon Deo..."
                      required
                    />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="email">
                      Your Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="info.example@.com"
                      required
                    />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="message">
                      Your Message <span>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Opinion..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="contact-info-wrap">
                <div className="contact-img">
                  <img src={img1} alt="Contact" />
                </div>
                <div className="contact-info-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <p>W84 New Park Lan, New York, NY 4586 United States</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="content">
                        <p>+9 (256) 254 9568</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope-open"></i>
                      </div>
                      <div className="content">
                        <p>info@example.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contact-social">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
