import React, { useContext } from "react";
import phone from "./images/phone.svg";
import { GlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = GlobalContext();
  const handle = (e) => {
    // console.log(e.target.classList);
  };

  return (
    <section className="hero" onMouseOver={handle}>
      <div className="hero-center">
        <article>
          <h1>payments infrastructure for the internet</h1>
          <p>
            millions of companies of all sizes from strtups to fortune 500-use
            stripes software and APIs to accespt payments, send payouts, and
            manage their business online.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phone} alt="" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
