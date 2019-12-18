import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hearder from "../Header";
import Home from "../Home";
import Genres from "../Genres";
import NewGenres from "../NewGenres";
import EditGenres from "../EditGenres";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("/api").then(res => {
      setData(res.data);
    });
  }, []);
  return (
    <Router>
      <Hearder />
      <Route exact path="/" component={Home} />
      <Route exact path="/genres" component={Genres} />
      <Route exact path="/genres/new" component={NewGenres} />
      <Route exact path="/edit-genres/:id" component={EditGenres} />
    </Router>
  );
}

export default App;
