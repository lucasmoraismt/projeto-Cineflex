import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./Header";
import FilmsList from "./FilmsList";
import FilmSessions from "./FilmSessions";

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
                <Route path="/sessions/:filmId" exact>
                    <FilmSessions />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}