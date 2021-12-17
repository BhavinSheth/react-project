import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sidebar";
import Modal from "./modal";
import Home from "./home";

function App() {
  return (
    <>
      <Home />;
      <Modal />;
      <Sidebar />
    </>
  );
}

export default App;
