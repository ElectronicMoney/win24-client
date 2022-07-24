// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../utils"



export const baseQuery = fetchBaseQuery({ baseUrl: API_URL })