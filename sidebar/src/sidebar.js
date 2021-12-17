import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { GlobalContext } from "./context";

function Sidebar() {
  const { sidebar, closeSidebar } = GlobalContext();
  console.log(sidebar);
  return (
    <aside className={`sidebar ${sidebar ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img
          src="https://raw.githubusercontent.com/john-smilga/react-projects/b3aa05dd5a6636c3f03968ba60ed734deda91f00/11-navbar/final/src/logo.svg"
          alt=""
          className="logo"
        />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (
            <li>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
