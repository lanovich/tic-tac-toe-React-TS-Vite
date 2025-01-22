import { store } from "../../store/store";
import { GameLayout } from "./GameLayout";
import { Action } from "../../types";
import { useEffect, useState } from "react";

const Game = () => {
  const { dispatch, getState } = store;

  const [state, setState] = useState(getState());

  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(getState());
    });
    return () => unsubscribe();
  }, [getState]);

  useEffect(() => {
    if (state.isGameEnded) return;
    const { field } = state;
    
    for (const pattern of WIN_PATTERNS) {
      if (
        field[pattern[0]] &&
        field[pattern[0]] === field[pattern[1]] &&
        field[pattern[1]] === field[pattern[2]]
      ) {
        dispatch({ type: "SET_IS_GAME_ENDED", payload: true } as Action);
        return;
      }
    }

    if (!field.includes("")) {
      dispatch({ type: "SET_IS_DRAW", payload: true } as Action);
      dispatch({ type: "SET_IS_GAME_ENDED", payload: true } as Action);
    }
  }, [state]);

  console.log(state)

  const handleMakeMove = (index: number) => {
    if (state.field[index] === "" && !state.isGameEnded) {
      dispatch({
        type: "MAKE_MOVE",
        payload: { index, currentPlayer: state.currentPlayer },
      });
    }
  };

  const handleRestartGame = () => {
    dispatch({ type: "SET_IS_DRAW", payload: false } as Action);
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <GameLayout
      currentPlayer={state.currentPlayer}
      field={state.field}
      isGameEnded={state.isGameEnded}
      isDraw={state.isDraw}
      makeMove={handleMakeMove}
      restartGame={handleRestartGame}
    />
  );
};

export default Game;
