import React from "react";
import Breadcrumb from "../components/BreadCrum"; // Ensure this path is correct
import IngredientsSection from "../components/IngredientsSection";
import ServicesSection from "../components/ServiceSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <IngredientsSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default AboutUs;
