import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "./context";

function Home() {
  const { modal, sidebar, openModal, openSidebar } = GlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          openSidebar();
          console.log(sidebar);
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          openModal();
        }}
      >
        show modal
      </button>
    </main>
  );
}

export default Home;
