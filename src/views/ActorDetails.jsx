import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../config";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ActorDetails.css";
import Loader from "../components/Loader/Loader";
import { motion } from "framer-motion";

const ActorDetails = ({ match }) => {
  const id = match.params.id;
  const [actor, setActor] = useState([]);
  const [credits, setCredits] = useState([]);
  const loading = useSelector((state) => state.state.loading);
  const dispatch = useDispatch();

  const transitionVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
      },
    },
  };

  const fetchActorDetails = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setActor(data);
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  const fetchActorCredits = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setCredits(
        data.cast.sort((a, b) =>
          a.release_date < b.release_date
            ? 1
            : b.release_date < a.release_date
            ? -1
            : 0
        )
      );
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchActorDetails();
    fetchActorCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <motion.div
      className="ActorDetails"
      variants={transitionVariant}
      animate="visible"
      initial="hidden"
    >
      <div className="ActorDetails__info">
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
              : "https://via.placeholder.com/200x300"
          }
          alt="actor_photo"
          className="ActorDetails__info--poster"
        />

        <div>
          <div className="ActorDetails__name">{actor.name}</div>
          <div className="ActorDetails__birthday">
            <i className="fas fa-birthday-cake"></i> {actor.birthday},{" "}
            {actor.place_of_birth}
          </div>
          <div>{actor.biography}</div>
        </div>
      </div>

      <hr className="ActorDetails__divider" />

      <p className="ActorDetails__subtitle">Credits</p>
      <div className="ActorDetails__credits">
        {credits.map((x, i) => (
          <div key={i} className="ActorDetails__credits--info">
            {x.release_date}{" "}
            <Link
              to={`/movie/${x.id}`}
              className="ActorDetails__credits--info--link"
            >
              {x.original_title}
            </Link>{" "}
            {x.vote_average}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActorDetails;
