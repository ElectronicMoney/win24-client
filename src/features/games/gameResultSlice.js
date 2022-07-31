import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentActiveUser: {},
  currentActiveGame: {},
  currentCompletedGame: {}
}


export const gameResultSlice = createSlice({
  name: 'gameResult',
  initialState,
  reducers: {
    
    setCurrentActiveUser: (state, action) => {
        state.gameResult =  {
          ...state,
          user: action.payload.user,
        }
    },

      setCurrentActiveGame: (state, action) => {
        state.gameResult =  {
          ...state,
          currentActiveGame: action.payload.currentActiveGame
        }
    },

      setCurrentCompletedGame: (state, action) => {
        state.gameResult =  {
          ...state,
          currentCompletedGame: action.payload.currentCompletedGame
        }
    },

  },
})

// Action creators are generated for each case reducer function
export const { setCurrentActiveUser, setCurrentActiveGame, setCurrentCompletedGame } = gameResultSlice.actions

export default gameResultSlice.reducer


