import { createStore, applyMiddleware } from "redux";
import state from "./state";
import reducers from "./reducers/index";
import ReduxThunk from "redux-thunk";

const store = createStore(reducers, state, applyMiddleware(ReduxThunk));

export default store;
