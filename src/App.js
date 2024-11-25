import React from "react";
import Navbar from "./components/Navbar";
import HeadingSection from "./components/HeadingSection";
import ServicesSection from "./components/ServicesSection";
import DestinationsSection from "./components/DestinationsSection";
import SearchSection from "./components/SearchSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import data from "./data/destination.json";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeadingSection />
      <ServicesSection />
      <DestinationsSection />
      <BookingSection />
      <SearchSection destinations={data.destinations} />
      <Footer />
    </div>
  );
}

export default App;
