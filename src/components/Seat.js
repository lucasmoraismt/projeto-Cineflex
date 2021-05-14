import { useState } from "react";

export default function Seat(props) {
  const { id, name, isAvailable, selected, setSelected } = props;
  const [isClicked, setIsClicked] = useState(false);

  function selectSeat(id) {
    if (!isAvailable) {
      alert("Esse assento não está disponível!");
    } else {
      let newSeat;
      if (!isClicked) {
        setIsClicked(true);
        newSeat = [...selected, id];
        setSelected(newSeat);
        console.log(selected, isClicked);
      } else {
        setIsClicked(false);
        newSeat = selected.filter((i) => i !== id);
        setSelected(newSeat);
        console.log(selected, isClicked);
      }
    }
  }

  return (
    <li
      onClick={() => selectSeat(id, name)}
      className={
        isAvailable
          ? isClicked
            ? "seat available selected"
            : "seat available"
          : "seat unavailable"
      }
    >
      <p>{name}</p>
    </li>
  );
}
