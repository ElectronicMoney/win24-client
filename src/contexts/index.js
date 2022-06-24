import {  createContext } from "react";

export const AppContext = createContext({
    dialogue:{ open: false},
    counter: { count: 0}
})
