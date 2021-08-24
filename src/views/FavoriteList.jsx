import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./FavoriteList.scss";
import doggo from "../components/NotFound/doggo.png";
import { motion } from "framer-motion";

const FavoriteList = () => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();
  const isEmpty = bookmark.length === 0;

  const favoriteVariant = {
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemsVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const emptyVariant = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return loading ? (
    <Loader />
  ) : !isEmpty ? (
    <motion.div
      className="Favorite"
      variants={favoriteVariant}
      animate="visible"
      initial="hidden"
    >
      {bookmark.map((x, i) => (
        <motion.div key={i} className="Favorite__img" variants={itemsVariant}>
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
            <motion.i
              className="far fa-times-circle fa-lg"
              whileHover={{ scale: 1.2 }}
            ></motion.i>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ) : (
    <motion.div
      className="Empty"
      variants={favoriteVariant}
      animate="visible"
      initial="hidden"
    >
      <motion.div variants={emptyVariant}>
        YOUR FAVORITE LIST IS EMPTY
      </motion.div>
      <motion.img src={doggo} alt="doggo" variants={emptyVariant} />
    </motion.div>
  );
};

export default FavoriteList;
