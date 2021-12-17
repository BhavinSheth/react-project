import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "./context";

const Submenu = () => {
  const {
    submenu,
    location,
    page: { page, links },
  } = GlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    console.log(submenu);
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log("hello");
  }, [location]);
  return (
    <aside
      className={`${submenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <div className={`${"submenu-center col-2"}`}>
        {links.map(({ label, icon, url }, index) => {
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
