import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <div className="Header__left">
        <Link
          to="/"
          onClick={() => dispatch({ type: "CURRENT_PAGE", payload: 1 })}
        >
          <i className="fas fa-video fa-lg"> </i>
        </Link>
        <Link to="/favorite" className="Header__favorite">
          FAVORITE LIST
        </Link>
      </div>
      <div className="Header__right">
        {/* <search-movies v-if="this.$route.path === '/'" /> */}
        <a href="https://github.com/Lane876" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/52612617?v=4"
            alt="avatar"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
