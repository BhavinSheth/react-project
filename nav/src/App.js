import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { social } from "./data";
import Social from "./social";

function App() {
  const container = useRef(null);
  let [show, setShow] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);
  let [disp, setDisp] = useState(false);
  function addClass() {
    setWidth(window.innerWidth);
    {
      width > 800 ? setDisp(true) : setDisp(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", addClass);
  }, []);
  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img
          src="https://raw.githubusercontent.com/john-smilga/react-projects/b3aa05dd5a6636c3f03968ba60ed734deda91f00/11-navbar/final/src/logo.svg"
          alt=""
          className="logo"
        />
        <button className="nav-toggle" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </div>
      <ul
        className={`links links-container ${show ? "show-container" : null}`}
        ref={container}
      >
        {links.map(({ id, url, text }) => {
          return (
            <li>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <div className="social-icons">
        {social.map((item) => {
          return <Social {...item} />;
        })}
      </div>
    </nav>
  );
}

export default App;
