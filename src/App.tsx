import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import PlaceDetails from "./pages/PlaceDetails";


const App = () => {
  return (
    <>
  
      <div className="bg-red-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/placedetails" element={<PlaceDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
