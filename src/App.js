import React from "react";
import './index.css'
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"
import Activities from "./components/Activities.jsx"

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
    </div>
  );
}

export default App;
