import React from "react";
import { Link } from "react-router-dom";
import "./MainList.css";

const Index = (movies) => {
  return (
    <div className="MoviesList">
      {movies.movies.map((x, i) => (
        <Link to={`/movie/${x.id}`} key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w300${x.poster_path}`}
            alt="poster"
          />
        </Link>
      ))}
    </div>
  );
};

export default Index;
