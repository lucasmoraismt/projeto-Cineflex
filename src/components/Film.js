import { Link, useParams } from "react-router-dom";

export default function Film(props) {
    const { poster, title } = props;
    const filmId = useParams();

    return (
        <Link to={`/sessions/${filmId}`} >
            <li className="film">
                <img src={poster} alt={title} />
            </li>
        </Link>
    );
}