import { createStore } from "redux";
import cartReducer from "./cartReduxcer";

export const store = createStore(cartReducer);