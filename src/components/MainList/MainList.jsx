import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./MainList.scss";
import Pagination from "../Pagination/Pagination";

const MainList = ({ movies }) => {
  const bookmark = useSelector((state) => state.state.bookmark);
  const loading = useSelector((state) => state.state.loading);
  const searchMovies = useSelector((state) => state.state.searchMovies);
  const query = useSelector((state) => state.state.query);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const movieVariant = {
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const imgVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  console.log(searchMovies);

  return loading ? (
    <Loader />
  ) : searchMovies?.length ? (
    <motion.div
      className="MoviesList"
      variants={movieVariant}
      animate="visible"
      initial="hidden"
    >
      {searchMovies?.map((x, i) => (
        <motion.div
          key={i}
          className="MoviesList__container"
          variants={imgVariant}
          whileHover={{ scale: 1.05 }}
        >
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
        </motion.div>
      ))}
      {searchMovies.length === 0 && (
        <div className="MoviesList__noresult">
          No results for "<span>{query}</span>"
        </div>
      )}
    </motion.div>
  ) : (
    <>
      <Pagination />
      <motion.div
        className="MoviesList"
        variants={movieVariant}
        animate="visible"
        initial="hidden"
      >
        {movies.map((x, i) => (
          <motion.div
            key={i}
            className="MoviesList__container"
            variants={imgVariant}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>
        ))}
      </motion.div>
      <Pagination />
    </>
  );
};

export default MainList;
