import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Submenu from "./submenu";
import Hero from "./hero";
import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
