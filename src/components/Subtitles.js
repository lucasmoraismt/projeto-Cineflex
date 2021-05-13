export default function Subtitles() {
  return (
    <>
      <ul className="subtitles">
        <li className="seat available selected"></li>
        <li className="seat available"></li>
        <li className="seat unavailable"></li>
      </ul>
      <ul className="subtitles">
        <li className="subtitle">Selecionado</li>
        <li className="subtitle">Disponível</li>
        <li className="subtitle">Indisponível</li>
      </ul>
    </>
  );
}
