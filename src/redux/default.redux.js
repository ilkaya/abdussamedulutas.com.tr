import {store} from "./redux";
let INITIAL_STATE= {
    page: window.location.pathname
};
export default function Reducer(state = INITIAL_STATE,{type,payload})
{
    switch(type)
    {
        case "ch/page":{
            return {
                ...state,
                page: payload
            }
        }
        default:{
            return state;
        }
    }
}