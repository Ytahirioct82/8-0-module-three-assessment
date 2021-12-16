import "../App.css";
import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
    };
  }

  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  handleDropdown = (event) => {
    this.setState({
      currentMovie: event.target.value,
    });
  };

  render() {
    let dropDownMenu = this.state.movies.map((movie) => {
      return <option key={movie.id}>{movie.title}</option>;
    });

    let currentMovieObject = this.state.movies.find((movie) => {
      return movie.title === this.state.currentMovie;
    });

    console.log(currentMovieObject?.title);
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleDropdown}>
          <option></option>
          {dropDownMenu}
        </select>
        {this.state.currentMovie && <h1>Title: {currentMovieObject?.title}</h1>}
        {this.state.currentMovie && <h1>Release date: {currentMovieObject?.release_date}</h1>}
        {this.state.currentMovie && <h1>Description: {currentMovieObject?.description}</h1>}
      </div>
    );
  }
}
export default Movies;
