import React, { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from BE API
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          {/* Display showtimes for the movie */}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
