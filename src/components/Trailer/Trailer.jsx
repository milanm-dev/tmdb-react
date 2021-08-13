import React from "react";
import { useDispatch } from "react-redux";
import "./Trailer.css";

const Trailer = ({ content }) => {
  return (
    <div class="Iframe">
      <iframe
        width="560"
        height="315"
        src={`http://www.youtube.com/embed/${content}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="youtube"
      ></iframe>
    </div>
  );
};

export default Trailer;
