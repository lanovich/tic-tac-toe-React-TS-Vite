import { useDispatch, useSelector } from "react-redux";
import styles from "./Field.module.css";
import {
  selectCurrentPlayer,
  selectField,
  selectWinner,
} from "../../selectors";
import { makeMove, setIsGameEnded } from "../../actions";
import { useEffect } from "react";

export const Field = () => {
  const dispatch = useDispatch();
  const field = useSelector(selectField);
  const winner = useSelector(selectWinner);
  const currentPlayer = useSelector(selectCurrentPlayer);

  useEffect(() => {
    if (winner) {
      dispatch(setIsGameEnded(true));
    }
  }, [dispatch, field, winner]);

  const handleMakeMove = (index: number) => {
    dispatch(makeMove(index, currentPlayer));
  };

  return (
    <div className={styles.fieldContainer}>
      {field.map((cell, index) => {
        return (
          <span
            className={cell !== "" ? styles.activeCell : ""}
            key={index}
            onClick={() => handleMakeMove(index)}
          >
            {cell}
          </span>
        );
      })}
    </div>
  );
};
