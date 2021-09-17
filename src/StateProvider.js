import React, { createContext, useContext, useReducer } from 'react';

// Creating the data layer where everything actually lives with createContext
export const StateContext = createContext();

// The data layer is the State Provider with teh higehr order component. Here in this case, children is teh 'App' component in index.js
export const StateProvider = ({ reducer, initialState, children }) => (
    // Helps us in setting the data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Helps in pulling the information from the data layer
export const useStateValue = () => useContext(StateContext);