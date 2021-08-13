import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import "./Pagination.css";

const Pagination = () => {
  const currentPage = useSelector((state) => state.state.currentPage);
  const loading = useSelector((state) => state.state.loading);
  const searchMovies = useSelector((state) => state.state.searchMovies);
  const dispatch = useDispatch();

  return loading ? (
    <Loader />
  ) : (
    !searchMovies && (
      <div className="Pagination">
        <button
          disabled={currentPage === 1}
          className="Pagination__button"
          onClick={() =>
            dispatch({ type: "CURRENT_PAGE", payload: currentPage - 1 })
          }
        >
          <i className="fas fa-angle-left"></i>
        </button>

        <button
          className="Pagination__btns"
          onClick={() => dispatch({ type: "CURRENT_PAGE", payload: 1 })}
        >
          <i className="fas fa-angle-double-left"></i>
        </button>

        <button
          className="Pagination__btns"
          onClick={() =>
            dispatch({
              type: "CURRENT_PAGE",
              payload: currentPage === 1 ? 1 : currentPage - 1,
            })
          }
        >
          {currentPage === 1 ? 1 : currentPage - 1}
        </button>

        <button className="Pagination__current">
          {currentPage === 1 ? 1 : currentPage}{" "}
        </button>

        <button
          className="Pagination__btns"
          onClick={() =>
            dispatch({
              type: "CURRENT_PAGE",
              payload: currentPage === 500 ? 500 : currentPage + 1,
            })
          }
        >
          {currentPage === 500 ? 500 : currentPage + 1}
        </button>

        <button
          className="Pagination__btns"
          onClick={() => dispatch({ type: "CURRENT_PAGE", payload: 500 })}
        >
          <i className="fas fa-angle-double-right"></i>
        </button>

        <button
          disabled={currentPage === 500}
          className="Pagination__button"
          onClick={() =>
            dispatch({ type: "CURRENT_PAGE", payload: currentPage + 1 })
          }
        >
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    )
  );
};

export default Pagination;
