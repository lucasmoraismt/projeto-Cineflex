import "../css/reset.css";
import "../css/styles.css";

export default function App() {
    return (
        <>
            <div className="header">
                <h1>CINEFLEX</h1>
            </div>
            <div className="app">
                <p className="page-title">Selecione o Filme</p>
                <ul className="films-list">
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                    <li className="film">
                        <img src="" alt="" />
                    </li>
                </ul>
            </div>
        </>
    );
}