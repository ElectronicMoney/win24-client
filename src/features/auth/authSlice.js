import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: localStorage.getItem("accessToken") || "",
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false
}



export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    
    setAuthUser: (state, action) => {

        localStorage.setItem("accessToken",  action.payload.accessToken)
        localStorage.setItem("isAuthenticated", true)

        state.accessToken = action.payload.accessToken
        state.isAuthenticated = true
    },

    deleteAuthUser: (state) => {
        localStorage.setItem("accessToken",  "")
        localStorage.setItem("isAuthenticated", false)
        state.accessToken = ""
        state.isAuthenticated = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuthUser, deleteAuthUser } = authSlice.actions

export default authSlice.reducer


