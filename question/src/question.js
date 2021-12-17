import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info }) {
  let [value, setValue] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setValue(!value);
          }}
        >
          {value ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{value ? info : null}</p>
    </div>
  );
}

export default Question;
