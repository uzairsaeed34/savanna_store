import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import GroceryPage from "./pages/GroceryPage";
import MeatPage from "./pages/Meat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/grocery" element={<GroceryPage />} />
        <Route path="/meat" element={<MeatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
