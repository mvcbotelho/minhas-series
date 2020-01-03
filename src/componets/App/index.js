import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditGenres from "../EditGenres";
//import EditSeries from "../EditSeries";
import Genres from "../Genres";
import Hearder from "../Header";
import Home from "../Home";
import InfoSerie from "../InfoSerie";
import NewGenres from "../NewGenres";
import NewSeries from "../NewSeries";
import Series from "../Series";

function App() {
  return (
    <Router>
      <Hearder />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/genres/:id" component={EditGenres} />
        <Route exact path="/series/:id" component={InfoSerie} />
        <Route exact path="/genres/new" component={NewGenres} />
        <Route exact path="/series/new" component={NewSeries} />
      </Switch>
    </Router>
  );
}

export default App;
