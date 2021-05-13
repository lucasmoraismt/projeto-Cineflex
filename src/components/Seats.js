import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import Loading from "./Loading";
import Subtitles from "./Subtitles";
import BottomBar from "./BottomBar";

export default function Seats(props) {
  const hour = props.location;
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [inputName, setInputName] = useState("");
  const [cpf, setCpf] = useState("");
  const { sessionId } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`
    );

    promise.then((response) => {
      setTimeout(() => setSeats(response.data), 400);
    });
    promise.catch(() => alert("Erro!"));
  }, [sessionId]);

  function SeatsList() {
    return seats.seats.map((s) => (
      <Seat
        id={s.id}
        name={s.name}
        isAvailable={s.isAvailable}
        selected={selectedSeats}
        setSelected={setSelectedSeats}
        key={s.id}
      />
    ));
  }

  return (
    <div className="container selection">
      <p className="page-title">Selecione o(s) assento(s)</p>
      <ul className="seats-list">
        {seats.length === 0 ? <Loading /> : <SeatsList />}
      </ul>
      <Subtitles />
      <p className="input-title">Nome</p>
      <input className="input" type="text" placeholder="Digite seu nome..." />
      <p className="input-title">CPF</p>
      <input className="input" type="number" placeholder="Digite seu CPF..." />
      <div className="confirmation">
        <button className="reservation">Reservar assento(s)</button>
      </div>
      {seats.length === 0 ? (
        ""
      ) : (
        <BottomBar
          title={seats.movie.title}
          posterURL={seats.movie.posterURL}
          weekday={seats.day.weekday}
          time={hour}
        />
      )}
    </div>
  );
}
