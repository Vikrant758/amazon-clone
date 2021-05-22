import React, { createContext, useContext, useReducer } from 'react'
//Prepare the data layer
export const StateContext = createContext();

//Wrap our app and provide the datalayer
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from Datalayer
export const useStateValue = () => useContext(StateContext);
