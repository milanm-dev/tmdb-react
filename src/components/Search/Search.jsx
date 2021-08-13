import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../../config";
import { useDispatch } from "react-redux";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const fetchSearchMovies = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await res.json();
      dispatch({ type: "SET_SEARCHMOVIES", payload: data.results });
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [query]);

  return (
    <div className="Search">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleInput}
        value={query}
      />
    </div>
  );
};

export default Search;
