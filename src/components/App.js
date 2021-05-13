import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import FilmsList from "./FilmsList";
import FilmSessions from "./FilmSessions";
import Seats from "./Seats";
import Success from "./Success";

import "../css/reset.css";
import "../css/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <FilmsList />
        </Route>
        <Route path="/film/:filmId" exact>
          <FilmSessions />
        </Route>
        <Route path="/session/:sessionId" exact>
          <Seats />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
