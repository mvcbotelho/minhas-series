import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hearder from "../Header";
import Home from "../Home";
import Genres from "../Genres";

function App() {
  return (
    <Router>
      <Hearder />
      <Route exact path="/" component={Home} />
      <Route exact path="/genres" component={Genres} />
    </Router>
  );
}

export default App;
