import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroceryItems from "../components/GroceryItems";
import Breadcrumb from "../components/BreadCrum";

const GroceryPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <GroceryItems />
      <Footer />
    </>
  );
};

export default GroceryPage;
