import React, { useContext } from "react";
import { GlobalContext } from "./context";
import logo from "./images/logo.svg";
import { FaBars, Fabars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = GlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const textBtn = e.target.getBoundingClientRect();
    console.log(textBtn);
    const center = (textBtn.left + textBtn.right) / 2;
    const bottom = textBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              onMouseDown={closeSubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
