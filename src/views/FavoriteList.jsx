import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./FavoriteList.css";
import doggo from "../components/NotFound/doggo.png";

const FavoriteList = () => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();
  const isEmpty = bookmark.length === 0;

  return loading ? (
    <Loader />
  ) : !isEmpty ? (
    <div className="Favorite">
      {bookmark.map((x, i) => (
        <div key={i} className="Favorite__img">
          <Link to={`/movie/${x.id}`}>
            <img
              src={
                x.poster_path
                  ? `https://image.tmdb.org/t/p/w200${x.poster_path}`
                  : "https://via.placeholder.com/200x300"
              }
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
  ) : (
    <div className="Empty">
      <div>YOUR FAVORITE LIST IS EMPTY</div>
      <img src={doggo} alt="doggo" />
    </div>
  );
};

export default FavoriteList;
