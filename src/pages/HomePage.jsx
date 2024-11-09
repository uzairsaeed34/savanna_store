import React from "react";
import Header from "../components/Header";
import SliderArea from "../components/SliderArea";
import CategoryItems from "../components/CategoryItems";
import SpecialProducts from "../components/SpecialProducts";
import BestDeals from "../components/BestDeals";
import Coupon from "../components/DiscBannber";
import BestSellers from "../components/BestSellers";
import DiscountStyleTwo from "../components/DiscountArea";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <SliderArea />
      <CategoryItems />
      <SpecialProducts />
      <BestDeals />
      <Coupon />
      <BestSellers />
      <DiscountStyleTwo />
      <Footer />
    </>
  );
};

export default HomePage;
