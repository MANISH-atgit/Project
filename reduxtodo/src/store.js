import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";

import rootReducer from "./reducers/index";


// const persistedState = loadState();

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//     saveState(store.getState());
// });



export default store;




