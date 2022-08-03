import Like from "./common/like";
import React, { Component } from "react";
import Table from "./common/Table";
import { Link } from "react-router-dom";
export class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn-sm btn btn-danger"
        >
          DELETE
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        movies={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MovieTable;
