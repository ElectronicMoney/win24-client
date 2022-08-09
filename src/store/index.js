import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import sseSlice from '../features/sse/sseSlice'
import authSlice from '../features/auth/authSlice'
import gameSlice from '../features/games/gameSlice'

import { authApi } from "../services/authApi"
import { betsApi } from "../services/betsApi"
import { gamesApi } from "../services/gamesApi"
import { rechargesApi } from "../services/rechargesApi"
import { withdrawalsApi } from "../services/withdrawalsApi"
import { usersApi } from "../services/usersApi"
import { accountsApi } from "../services/accountsApi"


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    sse:sseSlice,
    auth: authSlice,
    gameData:gameSlice,
    [authApi.reducerPath]: authApi.reducer,
    [accountsApi.reducerPath]: accountsApi.reducer,
    [betsApi.reducerPath]: betsApi.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [rechargesApi.reducerPath]: rechargesApi.reducer,
    [withdrawalsApi.reducerPath]: withdrawalsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware, 
      accountsApi.middleware, 
      betsApi.middleware, 
      gamesApi.middleware, 
      rechargesApi.middleware, 
      withdrawalsApi.middleware, 
      usersApi.middleware
    ),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)