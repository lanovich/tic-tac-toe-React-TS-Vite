export interface AppState {
  currentPlayer: "X" | "O";
  field: string[];
  isGameEnded: boolean;
  isDraw: boolean;
}

export interface PayloadAction<T> {
  type: string;
  payload: T;
}

export type Action =
  | { type: "MAKE_MOVE"; payload: { index: number; currentPlayer: "X" | "O" } }
  | { type: "RESTART_GAME" }
  | { type: "SET_IS_GAME_ENDED"; payload: boolean }
  | { type: "SET_IS_DRAW"; payload: boolean }
  | { type: "__INIT__" }
  | { type: "CHECK_WINNER" };

export type Dispatch = (action: Action) => void;
