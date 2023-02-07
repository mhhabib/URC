import React from "react";
import Movie from "./Movie";
import "../App.css";

const MovieList = (props) => {
  return (
    <div className="movie_lists">
      {props.movie && props.movies.map((movie) => <Movie movie={movie} />)}
    </div>
  );
};
export default MovieList;
