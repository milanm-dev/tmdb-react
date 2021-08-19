import React from "react";
import { Link } from "react-router-dom";
import "./MainList.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

const MainList = ({ movies }) => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);
  const searchMovies = useSelector((state) => state.state.searchMovies);
  const query = useSelector((state) => state.state.query);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return loading ? (
    <Loader />
  ) : searchMovies ? (
    <div className="MoviesList">
      {searchMovies?.map((x, i) => (
        <div key={i} className="MoviesList__container">
          <Link to={`/movie/${x.id}`}>
            <img
              src={
                x.poster_path
                  ? `https://image.tmdb.org/t/p/w300${x.poster_path}`
                  : "https://via.placeholder.com/200x300"
              }
              alt="poster"
              className="MoviesList__img"
            />
          </Link>

          <div
            className="MoviesList__bookmark"
            onClick={() => dispatch({ type: "SET_BOOKMARK", payload: x })}
          >
            {bookmark.find((b) => b.id === x.id) ? (
              <i className="fas fa-bookmark fa-2x"></i>
            ) : (
              <i className="far fa-bookmark fa-2x"></i>
            )}
          </div>
        </div>
      ))}
      {searchMovies.length === 0 && (
        <div className="MoviesList__noresult">
          No results for "<span>{query}</span>"
        </div>
      )}
    </div>
  ) : (
    <div className="MoviesList">
      {movies.map((x, i) => (
        <div key={i} className="MoviesList__container">
          <Link to={`/movie/${x.id}`}>
            <img
              src={
                x.poster_path
                  ? `https://image.tmdb.org/t/p/w300${x.poster_path}`
                  : "https://via.placeholder.com/200x300"
              }
              alt="poster"
              className="MoviesList__img"
            />
          </Link>

          <div
            className="MoviesList__bookmark"
            onClick={() => dispatch({ type: "SET_BOOKMARK", payload: x })}
          >
            {bookmark.find((b) => b.id === x.id) ? (
              <i className="fas fa-bookmark fa-2x"></i>
            ) : (
              <i className="far fa-bookmark fa-2x"></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainList;
