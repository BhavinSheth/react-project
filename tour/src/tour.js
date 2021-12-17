import React, { useState } from "react";

function Tour({ id, image, info, price, name, remove }) {
  const [readmore, setread] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setread(!readmore);
            }}
          >
            {readmore ? "read less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            remove(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
