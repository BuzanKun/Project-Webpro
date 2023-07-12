import React from "react";
import './index.css'
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='bg-blue-100'>
      <TopBar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
