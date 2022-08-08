import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    duration : 3,
    bet_amount: 10,
    is_color: false,
    is_number: false,
    is_size: false,
    color: null,
    number: null,
    size: null
}


export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    
    setGameData: (state, action) => {
        state.duration  =  3
        state.bet_amount =  action.payload.bet_amount ? action.payload.bet_amount: 10
        state.is_color =  action.payload.is_color ? action.payload.is_color: false
        state.is_number =  action.payload.is_number ? action.payload.is_number: false
        state.is_size =  action.payload.is_size ? action.payload.is_size: false
        state.color =  action.payload.color ? action.payload.color: null
        state.number =  action.payload.number ? action.payload.number: null
        state.size =  action.payload.size ? action.payload.size: null
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setGameData } = gameDataSlice.actions

export default gameDataSlice.reducer


