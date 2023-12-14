import React from "react";
import { useForm } from "react-hook-form";

const MovieForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission and send API req to create/edit a movie
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <textarea name="description" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MovieForm;
