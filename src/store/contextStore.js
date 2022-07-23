import React, { useReducer } from 'react';
import { rootReducer, initialState } from '../reducers/contextRootReducer';
import { AppContext } from '../contexts'
import { 
    incrementCounter, 
    decrementCounter, 
    resetCounter,
    openDialogueAction,
    closeDialogueAction
} from "../actions";


export default function AppProvider(props) {

    const [state, dispatch] = useReducer(rootReducer, initialState);   
    //  Create the store object
    const store = {
        counter: {
            count: state.counter.count, 
            incrementCounter: () => dispatch(incrementCounter()),
            decrementCounter: () => dispatch(decrementCounter()),
            resetCounter: (payload) => dispatch(resetCounter(payload))
        },

        dialogue: {
            open: state.dialogue.open, 
            openDialogue: () => dispatch(openDialogueAction()), 
            closeDialogue: () => dispatch(closeDialogueAction())
        }
    }


    return (
        <AppContext.Provider value = {store}>
            {props.children}
        </AppContext.Provider>
    )
}