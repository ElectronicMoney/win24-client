import { 
  COUNTER_INCREMENT, 
  COUNTER_DECREMENT, 
  COUNTER_RESET,
  OPEN_DIALOGUE,
  CLOSE_DIALOGUE
} from "../constants"


export const incrementCounter = () => ({
    type: COUNTER_INCREMENT,
});
  
export const decrementCounter = () => ({
  type: COUNTER_DECREMENT,
});

export const resetCounter = (payload) => ({
  type: COUNTER_RESET,
  payload: payload
});

export const openDialogueAction = () => ({
  type: OPEN_DIALOGUE,
});


export const closeDialogueAction = () => ({
  type: CLOSE_DIALOGUE
});


