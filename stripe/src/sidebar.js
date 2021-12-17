import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { GlobalContext } from "./context";

const Sidebar = () => {
  const { sidebar, closeSidebar } = GlobalContext();

  return (
    <aside
      className={`${sidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ links, page }, index) => {
            return (
              <article key={index}>
                <div className="sidebar-sublinks">
                  {links.map(({ url, icon, label }, index) => {
                    return (
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
