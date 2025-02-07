import styles from "./Game.module.css";
import { Field, Information } from "./";
import { useDispatch } from "react-redux";
import { restartGame } from "../../actions";

export const Game = () => {
  const dispatch = useDispatch();

  const handleRestartGame = () => {
    dispatch(restartGame());
  };

  return (
    <div className={styles.mainContainer}>
      <Information />
      <Field />
      <button onClick={handleRestartGame}>Restart</button>
    </div>
  );
};

export default Game;
