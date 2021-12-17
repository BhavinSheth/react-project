import "./index.css";
import { useEffect, useLayoutEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const remove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
  };

  const getUsers = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setloading(false);
    settours(tours);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );
  else {
    return (
      <main>
        <Tours tours={tours} remove={remove} />
      </main>
    );
  }
}

export default App;
