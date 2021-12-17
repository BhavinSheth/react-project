import { useState } from "react";
import data from "./data";
import Menu from "./menu";

function App() {
  let [items, setItems] = useState(data);

  let change = (type) => {
    type === "all" ? setItems(data) : setItems("");
    let newItems = data.filter((single) => single.category === type);
    setItems(newItems);
  };

  return (
    <main>
      <div className="menu section">
        <header className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </header>

        <div className="btn-container">
          <button className="filter-btn" onClick={() => change("all")}>
            all
          </button>
          <button className="filter-btn" onClick={() => change("breakfast")}>
            breakfast
          </button>
          <button className="filter-btn" onClick={() => change("lunch")}>
            lunch
          </button>
          <button className="filter-btn" onClick={() => change("shakes")}>
            shakes
          </button>
        </div>

        <section className="section-center">
          {items.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
