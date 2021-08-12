import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { API_KEY } from "../config";
import "./MovieDetails.css";

const MovieDetails = ({ match }) => {
  const id = match.params.id;
  const [movie, setMovie] = useState([]);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.state.bookmark);
  const isBookmarked = bookmark.find((x) => x.id === movie.id);

  const fetchMovieDetails = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
    );
    const data = await res.json();
    setMovie(data);
    dispatch({ type: "SET_LOADING", payload: false });
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="MovieDetails">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="poster"
            className="MovieDetails__poster"
          />
          <div className="MovieDetails__info">
            <div className="MovieDetails__info--opt">
              <div className="MovieDetails__info--title">{movie.title}</div>
              <div className="MovieDetails__info--bookmark">
                {isBookmarked ? (
                  <i
                    className="fas fa-bookmark fa-2x"
                    onClick={() =>
                      dispatch({ type: "SET_BOOKMARK", payload: movie })
                    }
                  ></i>
                ) : (
                  <i
                    className="far fa-bookmark fa-2x"
                    onClick={() =>
                      dispatch({ type: "SET_BOOKMARK", payload: movie })
                    }
                  ></i>
                )}
              </div>
            </div>
            <p className="MovieDetails__info--tagline">{movie.tagline}</p>
            <p className="MovieDetails__info--overview">{movie.overview}</p>
            <hr className="MovieDetails__info--hr" />
            <div>Language: {movie.original_language}</div>
            <div>Realease date: {movie.release_date}</div>
            <div>Runtime: {movie.runtime} minutes</div>
            <div>Budget: {movie.budget} $</div>
            <div>
              Rating: {movie.vote_average} out of ( {movie.vote_count} votes )
            </div>
            <hr className="MovieDetails__info--hr" />
            <div className="MovieDetails__info--buttons">
              <button className="MovieDetails__info--buttons--trailer">
                <i className="fab fa-youtube"></i> Watch Trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
