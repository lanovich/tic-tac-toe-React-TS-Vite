import { AppState } from "../types";
import { selectWinner } from "./selectWinner";

export const selectIsDraw = (state: AppState) =>
  state.field.every((cell) => cell) && !selectWinner(state);
