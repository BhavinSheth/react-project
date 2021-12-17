import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

function Reviews() {
  let [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button
        className="prev-btn"
        onClick={() => {
          {
            index != 0 ? setIndex((index -= 1)) : setIndex(people.length - 1);
          }
        }}
      >
        <FaChevronLeft />
      </button>
      <button
        className="next-btn"
        onClick={() => {
          {
            index != people.length - 1 ? setIndex((index += 1)) : setIndex(0);
          }
        }}
      >
        <FaChevronRight />
      </button>
      <div>
        <button
          className="random-btn"
          onClick={() => {
            let no = Math.floor(Math.random() * people.length);
            if (no === index) {
              setIndex((index += 1));
            } else {
              setIndex(no);
            }
          }}
        >
          surprise me
        </button>
      </div>
    </article>
  );
}

export default Reviews;
