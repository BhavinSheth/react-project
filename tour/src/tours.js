import React from "react";
import Tour from "./tour";

function Tours({ tours, remove }) {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour {...tour} remove={remove} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
