import "./App.css";
import { Fragment, useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMovies() {
    setIsLoading(true);
    const respose = await fetch("https://swapi.dev/api/films/");
    const data = await respose.json;
    var results = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(results);
    setIsLoading(false);
  }
  console.log("Isloading " + isLoading);
  return (
    <Fragment>
      <div className="header">
        <button onClick={fetchMovies}>Fetch Data</button>
      </div>
      {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
      {!isLoading && movies.length === 0 && <p>Found no movie</p>}
      {isLoading && (
        <p>
          Please wait a bit. <br />
          Data is fetching for you.
        </p>
      )}
    </Fragment>
  );
}
export default App;
