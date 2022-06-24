import combineReducers from 'react-combine-reducers';

import { 
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT, 
    COUNTER_RESET ,
    OPEN_DIALOGUE,
    CLOSE_DIALOGUE
} from "../constants";
import {init} from '../api'


// Initial state
const initialDialogue = {
  open: false
};

const countReducer = (state, action) => {
    switch (action.type) {
      case COUNTER_INCREMENT:
        return {...state, count: state.count + 1};
      case COUNTER_DECREMENT:
        return {...state, count: state.count - 1};
      case COUNTER_RESET:
        return {...state, count: init(action.payload) };
      default:
        return state;
    }
  }
  

// Initial state
const initialCounter = {
  count: 0,
};

const dialogReducer = (state, action) => {
    switch (action.type) {
      case OPEN_DIALOGUE:
        return {...state, open: true};
      case CLOSE_DIALOGUE:
        return {...state, open: false};
      default:
        return state;
    }
  }


export const [rootReducer, initialState] = combineReducers({
  counter: [countReducer, initialCounter],
  dialogue: [dialogReducer, initialDialogue],
})

