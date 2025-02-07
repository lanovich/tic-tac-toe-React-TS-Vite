import { useSelector } from "react-redux";
import styles from "./Information.module.css";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

export const Information = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  return (
    <div
      className={`${styles.Information} ${
        isDraw ? styles.draw : isGameEnded ? styles.win : ""
      }`}
    >
      {isDraw
        ? "Ничья"
        : isGameEnded
        ? `Победил ${currentPlayer === "X" ? "O" : "X"}`
        : `Ходит ${currentPlayer}`}
    </div>
  );
};
