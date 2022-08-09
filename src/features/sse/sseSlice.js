import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  activeGame: null,
}


export const sseSlice = createSlice({
  name: 'sse',
  initialState,
  reducers: {
    
    setActiveGame: (state, action) => {
        state.activeGame =  action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setActiveGame } = sseSlice.actions

export default sseSlice.reducer


