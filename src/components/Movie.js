import React from "react";
import "../App.css";
const Movie = (props) => {
  return (
    <div className="movie">
      <h3>
        {props.movie.title}{" "}
        <span style={{ fontSize: "12px", color: "#00425a" }}>
          ({props.movie.releaseDate})
        </span>{" "}
      </h3>
      <p>{props.movie.openingText}</p>
    </div>
  );
};
export default Movie;
