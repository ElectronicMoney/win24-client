// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../utils"
// import { setAuthUser, deleteAuthUser } from '../features/auth/authSlice';



export const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState()).auth.accessToken
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`);
        } 
        return headers
    },
    credentials: 'include', // This allows server to set cookies
})



// export  const baseQueryWithReAuth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if(result?.error?.status === 401) {
//         console.log("Sending Refresh Token...")
//         // ge the refresh token
//         let refreshResult = await baseQuery("/refresh_token", "POST", extraOptions)

//         console.log(refreshResult.data)

//         if(refreshResult?.data) {
//             api.dispatch(setAuthUser({accessToken: refreshResult.token, isAuthenticated:true}))
//             // Retry the original query with the new access token
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             const isAuthenticated = localStorage.setItem("isAuthenticated", false)

//             api.dispatch(deleteAuthUser({isAuthenticated}))
//         }

//     }

//     return result
// }