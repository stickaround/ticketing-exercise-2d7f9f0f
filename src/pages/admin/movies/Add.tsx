import React from "react";
import { Movie } from "types";

const AddMovie = () => {
  const onAddMovie = (data: Movie) => {
    // Handle form submission && send API req to create a new movie
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <MovieForm onSubmit={onAddMovie} />
    </div>
  );
};

export default AddMovie;
