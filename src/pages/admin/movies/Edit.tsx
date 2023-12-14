import React from "react";
import { Movie } from "types";

const EditMovie = () => {
  const onUpdateMovie = (data: Movie) => {
    // Handle form submission && send API req to update a new movie
  };

  return (
    <div>
      <h1>Update Movie</h1>
      <MovieForm onSubmit={onUpdateMovie} />
    </div>
  );
};

export default EditMovie;
