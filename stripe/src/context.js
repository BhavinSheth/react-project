import React, { useState, useContext } from "react";
import links from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = links.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        submenu,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, GlobalContext };
