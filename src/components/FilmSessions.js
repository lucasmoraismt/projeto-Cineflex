import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Day from "./Day";
import Loading from "./Loading";
import BottomBar from "./BottomBar";

export default function FilmSessions() {
  const [sessions, setSessions] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${filmId}/showtimes`
    );

    promise.then((response) => {
      setTimeout(() => setSessions(response.data), 400);
    });
    promise.catch(() => alert("Erro!"));
  }, [filmId]);

  return (
    <div className="container selection">
      {sessions.length === 0 ? (
        <Loading />
      ) : (
        <>
          <p className="page-title">Selecione o horário</p>
          {sessions.days.map((d) => (
            <Day day={d} key={d.id} />
          ))}
          <BottomBar
            title={sessions.title}
            posterURL={sessions.posterURL}
            weekday={null}
            time={null}
          />
        </>
      )}
    </div>
  );
}
