import combineReducers from 'react-combine-reducers';

import { 
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT, 
    COUNTER_RESET ,
    OPEN_DIALOGUE,
    CLOSE_DIALOGUE
} from "../constants";


// Initial state
const initialDialogue = {
  open: false
};

const countReducer = (state, action) => {
    switch (action.type) {
      case COUNTER_INCREMENT:
        if (state.count === 1000) {
          return state
        }
        return {...state, count: state.count + 1};
      case COUNTER_DECREMENT:
        if (state.count === 1) {
          return state
        }
        return {...state, count: state.count - 1};
      case COUNTER_RESET:
        return {...state, count: action.payload };
      default:
        return state;
    }
  }
  

// Initial state
const initialCounter = {
  count: 1,
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

