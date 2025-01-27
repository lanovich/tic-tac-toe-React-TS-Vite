export const makeMove = (index: number, currentPlayer: "X" | "O") => ({
  type: "MAKE_MOVE",
  payload: { index, currentPlayer },
});
