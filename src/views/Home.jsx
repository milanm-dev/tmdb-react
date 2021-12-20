import React, { useEffect, useState } from "react";
import { API_KEY } from "../config";
import MainList from "../components/MainList/MainList";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const currentPage = useSelector((state) => state.state.currentPage);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return <>{loading ? <Loader /> : <MainList movies={movies} />}</>;
};

export default Home;
