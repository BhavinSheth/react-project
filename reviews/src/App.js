import { useState } from "react";
import data from "./data";
import Review from "./reviews";

function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>

        <Review />
      </div>
    </main>
  );
}

export default App;
