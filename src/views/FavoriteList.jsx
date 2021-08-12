import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./FavoriteList.css";

const FavoriteList = () => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();

  return loading ? (
    <Loader />
  ) : (
    <div className="Favorite">
      {bookmark.map((x, i) => (
        <div key={i} className="Favorite__img">
          <Link to={`/movie/${x.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${x.poster_path}`}
              alt="poster"
            />
          </Link>
          <div
            className="Favorite__close"
            onClick={() => dispatch({ type: "SET_BOOKMARK", payload: x })}
          >
            <i className="far fa-times-circle fa-lg"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
