import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import FilmsList from "./FilmsList";
import FilmSessions from "./FilmSessions";
import Seats from "./Seats";
import Success from "./Success";

import "../css/reset.css";
import "../css/styles.css";

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [inputName, setInputName] = useState("");
  const [cpf, setCpf] = useState("");
  const purchaseData = {
    ids: selectedSeats,
    name: inputName,
    cpf: cpf,
  };

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
          <Seats
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            inputName={inputName}
            setInputName={setInputName}
            cpf={cpf}
            setCpf={setCpf}
          />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
