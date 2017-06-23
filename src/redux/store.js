import {createStore} from "redux";
import { combineReducers } from 'redux';
const initialState = {
    appState: initialAppState
};
const initialAppState = {
    userName: ""
};

var ON_USER_NAME_CHANGE = "ON_USER_NAME_CHANGE";

export function nothingReducer(state = {}) {
    return state;
}

export function appState(state = initialAppState, action) {
    switch(action.type) {
        case ON_USER_NAME_CHANGE:
            return {
                ...state,
                userName: action.value
            };
        default: 
            return state;
    }

}

export function onUserNameChange(value) {
    return {
        value,
        type: ON_USER_NAME_CHANGE
    }
}

var combinedReducer = combineReducers({appState, nothingReducer})
var store = createStore(combinedReducer, initialState);

export {store};