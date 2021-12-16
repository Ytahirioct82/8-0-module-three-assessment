import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <body>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/people" component={People} />
            <Route path="/locations" component={Locations} />
          </Switch>
        </body>
      </div>
    );
  }
}
export default App;
