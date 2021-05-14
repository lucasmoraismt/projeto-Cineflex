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
  const [inputName, setInputName] = useState("");
  const [cpf, setCpf] = useState("");
  const [successData, setSuccessData] = useState({});
  const purchaseData = {
    name: inputName,
    cpf: cpf,
    ...successData,
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
            inputName={inputName}
            setInputName={setInputName}
            cpf={cpf}
            setCpf={setCpf}
            setSuccessData={setSuccessData}
          />
        </Route>
        <Route path="/success" exact>
          <Success
            purchaseData={purchaseData}
            setInputName={setInputName}
            setCpf={setCpf}
            setSuccessData={setSuccessData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
