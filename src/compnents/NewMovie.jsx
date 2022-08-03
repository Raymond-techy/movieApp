import Joi from "joi-browser";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Form from "./common/Form";
export class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: "",
    },
    errors: {},
    movies: getMovies(),
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("genre"),
    stock: Joi.number().min(0).max(100).required().label("No in Stock"),
    rate: Joi.number().min(0).max(10).required().label("rate"),
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h2>NewMovie</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("stock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
