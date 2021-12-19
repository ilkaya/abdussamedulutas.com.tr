export {Provider} from "react-redux";
import {combineReducers, createStore} from "redux"

import defaultRedux from "./default.redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__:any;
    }
}

export let store = createStore(
    combineReducers({
        defaultRedux   
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);