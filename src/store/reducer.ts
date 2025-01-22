import { AppState, Action } from "../types";

const initialState: AppState = {
  currentPlayer: "X",
  field: Array(9).fill(""),
  isGameEnded: false,
  isDraw: false,
};

export const AppReducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case "MAKE_MOVE": {
      const { index, currentPlayer } = action.payload;
    
      const newField = [...state.field];
      newField[index] = currentPlayer;
    
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
    
      return {
        ...state,
        field: newField,
        currentPlayer: nextPlayer,
      };
    }
    
    case "RESTART_GAME":
      return initialState;

    case "SET_IS_GAME_ENDED":
      return { ...state, isGameEnded: action.payload };

    case "SET_IS_DRAW":
      return { ...state, isDraw: action.payload };

    default:
      return state;
  }
};
