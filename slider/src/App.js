import { useState } from "react";
import data from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  let [people, setPeople] = useState(data);
  let [value, setValue] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {data.map((person, index) => {
          let { id, image, title, quote, name } = person;

          let position = "nextSlide";
          if (index === value) {
            position = "activeSlide";
          }
          if (
            index === value - 1 ||
            (value === 0 && index === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position}>
              <h2>{id}</h2>
              <img src={image} alt="" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            value === 0 ? setValue(data.length - 1) : setValue(value - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            value === data.length - 1 ? setValue(0) : setValue(value + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
