import { Link, useParams } from "react-router-dom";

export default function Film(props) {
  const { poster, title, id } = props;
  const { filmId } = useParams();

  return (
    <Link to={`/film/${id}`}>
      <li className="film">
        <img src={poster} alt={title} />
      </li>
    </Link>
  );
}
