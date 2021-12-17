import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktails, setCocktails] = React.useState(null);
  React.useEffect(() => {
    async function getCocktail() {
      const response = await fetch(`${url}${id}`);
      const data = response.json();
      console.log(data);
      setLoading(false);
    }
  }, [id]);
  return (
    <div>
      <h2>{id} </h2>
    </div>
  );
};

export default SingleCocktail;
