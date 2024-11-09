import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MeatItems from "../components/MeatProducts";
import Breadcrumb from "../components/BreadCrum";

const MeatPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <MeatItems />
      <Footer />
    </>
  );
};

export default MeatPage;
