import { Link } from "react-router-dom";

export default function Day({ day }) {
  const { id, weekday, date, showtimes } = day;

  function TimeButton({ name, id }) {
    return (
      <Link to={`/session/${id}`}>
        <li className="weekday-time">
          <p>{name}</p>
        </li>
      </Link>
    );
  }
  console.clear();
  console.log(showtimes);
  return (
    <div>
      <p className="session-day">{`${weekday} - ${date}`}</p>
      <ul className="times-list">
        {showtimes.map((t) => (
          <TimeButton name={t.name} key={t.id} />
        ))}
      </ul>
    </div>
  );
}
