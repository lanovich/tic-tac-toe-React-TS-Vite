import { AppState } from "../types";

export const selectWinner = (state: AppState) => {
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

  for (const pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    if (
      state.field[a] &&
      state.field[a] === state.field[b] &&
      state.field[a] === state.field[c]
    ) {
      return state.field[a];
    }
  }
  return null;
};
