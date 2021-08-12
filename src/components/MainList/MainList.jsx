import React from "react";
import { Link } from "react-router-dom";
import "./MainList.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

const MainList = ({ movies }) => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);

  const dispatch = useDispatch();

  return loading ? (
    <Loader />
  ) : (
    <div className="MoviesList">
      {movies.map((x, i) => (
        <div key={i} className="MoviesList__container">
          <Link to={`/movie/${x.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${x.poster_path}`}
              alt="poster"
              className="MoviesList__img"
            />
          </Link>

          <div
            className={
              loading ? "MoviesList__bookmark--b" : "MoviesList__bookmark"
            }
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
