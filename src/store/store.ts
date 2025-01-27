import { createStore } from "redux";
import { AppReducer } from "./reducer";

const reducer = AppReducer;

export const store = createStore(reducer);
