import React, {useContext, useReducer} from 'react';
import {personReducer} from "./PersonReducer";

const initialState =  {
    people: [],
    loadTStamp: undefined,
    loaded: false
}

export const personContext = React.createContext({});

export function PersonContextProvider(props) {
    const [state, dispatch] = useReducer(personReducer, initialState);
    const ctx = {
        state: state,
        dispatch: dispatch,
    }
    return (
        <personContext.Provider value={ctx}>
            {props.children}
        </personContext.Provider>
    );
}