import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['AuthApi'],
  endpoints: (build) => ({

    authApi: build.mutation({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all User-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created user could show up in any lists.
      invalidatesTags: [{ type: 'AuthApi'}],
    }),

      refreshTokenApi: build.mutation({
      query(body) {
        return {
          url: `refresh_token`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all User-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created user could show up in any lists.
      invalidatesTags: [{ type: 'AuthApi'}],
    }),


      logoutApi: build.mutation({
      query() {
        return {
          url: `logout`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this User `id` only.
      invalidatesTags: (result, error) => [{ type: 'AuthApi'}],
    }),


    getProfile: build.query({
      query: () => `profiles`,
      providesTags: (result, error) => [{ type: 'AuthApi'}],
    }),

  }),
})

export const {
  useAuthApiMutation,
  useRefreshTokenApiMutation,
  useLogoutApiMutation,
  useGetProfileQuery,
} = authApi