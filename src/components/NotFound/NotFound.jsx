import React from "react";
import "./NotFound.css";
import doggo from "./doggo.png";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="NotFound">
      <div>404 | Page not found</div>
      <img src={doggo} alt="doggo" />
    </div>
  );
};

export default NotFound;
