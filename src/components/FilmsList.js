import { useState, useEffect } from 'react';
import axios from "axios";
import Film from "./Film";
import Loading from "./Loading";

export default function FilmsList() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        promise.then((response) => {
            setFilms(response.data);
        })
    }, []);

    function FilmsMap() {
        return films.map(f => <Film poster={f.posterURL} title={f.title} key={f.id} />)
    }

	return (
		<div className="container">
			<p className="page-title">Selecione o filme</p>
			<ul className="films-list">
                {films === [] ? <Loading /> : <FilmsMap />}
			</ul>
		</div>
	);
}