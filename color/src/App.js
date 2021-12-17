import { useState } from "react";
import Values from "values.js";
import SingleColor from "./singlecolor";

function App() {
  let [color, setColor] = useState();
  let [error, setError] = useState(false);
  let [list, setList] = useState(new Values("#f15025").all(10));

  let handle = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator </h3>
        <form action="" onSubmit={handle}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            onChange={(e) => {
              color = e.target.value;
            }}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
