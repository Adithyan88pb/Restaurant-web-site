import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Home from "../Pages/Home/Home";
import Dishes from "../Pages/Dishes/Dishes";
import Booking from "../Pages/Booking/Booking";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
function LayoutRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurant-web-site" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
