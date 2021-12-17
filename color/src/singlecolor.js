import { React, useState, useEffect } from "react";
import rgbToHex from "./util";

let SingleColor = ({ rgb, weight, index, hex }) => {
  let [alert, setAlert] = useState(false);
  console.log(index);
  let bcg = rgb.join(",");

  return (
    <article
      style={{ backgroundColor: `rgb(${bcg})` }}
      className="color"
      onClick={() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        navigator.clipboard.writeText("#" + hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className={`${index}>10?"color-light":"color-value"`}>#{hex}</p>
      <p className="alert">{alert ? "copied to clipboard" : null}</p>
    </article>
  );
};

export default SingleColor;
