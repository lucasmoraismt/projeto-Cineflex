import { useState } from "react";

export default function Seat(props) {
  const { id, name, isAvailable, selected, setSelected } = props;
  const [isSelected, setIsSelected] = useState(false);

  function selectSeat(id) {
    if (!isAvailable) {
      return;
    } else {
      if (!isSelected) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }

  return (
    <li
      onClick={() => selectSeat(id)}
      className={
        isAvailable
          ? isSelected
            ? "seat available selected"
            : "seat available"
          : "seat unavailable"
      }
    >
      <p>{name}</p>
    </li>
  );
}
