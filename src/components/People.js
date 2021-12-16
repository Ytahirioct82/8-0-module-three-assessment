import "../App.css";
import React from "react";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      currentPerson: null,
      currentPersonObject: null,
    };
  }
  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          people: data,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      currentPerson: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let currentObject = this.state.people.find((person) => {
      return person.name === this.state.currentPerson;
    });
    this.setState({
      currentPersonObject: currentObject,
    });
    event.target.reset();
  };

  render() {
    const result = !this.state.currentPersonObject ? (
      <h1>Not Found</h1>
    ) : (
      <div>
        <h1>Name: {this.state.currentPersonObject.name}</h1>
        <h1>Age: {this.state.currentPersonObject.age}</h1>
        <h1>Gender: {this.state.currentPersonObject.gender}</h1>
      </div>
    );

    return (
      <div className="people">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Search for a Person</h1>
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        {result}
      </div>
    );
  }
}
export default People;
