import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <Link to="/">
            <img
              className="logo"
              src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
              alt="dog"
            />
          </Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
        </nav>
      </div>
    );
  }
}
export default Navbar;
