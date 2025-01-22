import { AppState, Action } from "../types";
import { AppReducer } from "./reducer";

const createStore = (
  reducer: (state: AppState | undefined, action: Action) => AppState
) => {
  let state: AppState = reducer(undefined, { type: "__INIT__" } as Action);
  let listeners: Array<() => void> = [];

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = (): AppState => state;

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return { dispatch, getState, subscribe };
};


export const store = createStore(AppReducer);

store.dispatch({ type: "__INIT__" })