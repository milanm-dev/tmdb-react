import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";

function Navbar() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.state.currentPage);
  const path = useLocation();

  return (
    <div className="Header">
      <div className="Header__left">
        <Link
          to="/"
          onClick={() =>
            dispatch({ type: "CURRENT_PAGE", payload: currentPage })
          }
        >
          <i className="fas fa-video fa-lg"> </i>
        </Link>
        <Link to="/favorite" className="Header__favorite">
          FAVORITE LIST
        </Link>
      </div>
      <div className="Header__right">
        {path.pathname === "/" && <Search />}
        <a
          href="https://github.com/Lane876"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
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
