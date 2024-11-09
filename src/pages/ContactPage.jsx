import React from "react";
import ContactSection from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCrum";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
