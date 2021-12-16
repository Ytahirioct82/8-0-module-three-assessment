import "../App.css";
import React from "react";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      buttonName: "Show Locations",
      status: false,
    };
  }

  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  handleClick = () => {
    if (this.state.buttonName === "Hide Locations" && this.state.status) {
      this.setState({
        status: false,
        buttonName: "Show Locations",
      });
    } else {
      this.setState({
        status: true,
        buttonName: "Hide Locations",
      });
    }
  };

  render() {
    let locationsMap = null;
    if (this.state.locations.length > 0) {
      locationsMap = this.state.locations.map((location) => {
        return (
          <li>
            <p>Name: {location.name}</p>
            <p>Climate: {location.climate}</p>
            <p>Terrain: {location.terrain}</p>
          </li>
        );
      });
    }

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick} type="submit" value="Show Locations">
          {this.state.buttonName}
        </button>
        {this.state.status && <ul>{locationsMap}</ul>}
      </div>
    );
  }
}

export default Locations;
