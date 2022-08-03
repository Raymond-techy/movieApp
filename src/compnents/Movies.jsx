import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "./MovieTable";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import SearchBox from "./SearchBox";
import { Paginate } from "../utils/Paginate";
import FilterTab from "./common/FilterTab";
import { Link } from "react-router-dom";
import _ from "lodash";
import "../index.css";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: movies,
    });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;
    const { totalCount, data: movies } = this.getPageData();
    return (
      <div className="row">
        <div className="col-3">
          <FilterTab
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary my-2">
            New Movie
          </Link>
          <p>There are {totalCount} movies in the database</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;