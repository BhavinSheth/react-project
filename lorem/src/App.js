import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handle = (e) => {
    e.preventDefault();
    let amt = parseInt(count);
    if (amt < 0) {
      setText(data.slice(0, 1));
    } else if (amt > 8) {
      setText(data.slice(0, 8));
    } else setText(data.slice(0, amt));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem life??</h3>
      <form className="lorem-form" onSubmit={handle}>
        <label htmlFor="amount">paragraph</label>
        <input
          id="amount"
          type="number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((single, index) => {
          // console.log(single);
          return (
            <p>
              {index + 1}:{single}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
