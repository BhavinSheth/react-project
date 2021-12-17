import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef(null);

  const searchCocktail = () => {
    setSearch(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">search ur fav cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
