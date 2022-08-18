import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./api"


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQuery,
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: (page) => `users?page=${page}&size=10`,
      // Provides a list of `Users` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Users` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.items.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Users', id: 'LIST' }` is invalidated
            [{ type: 'Users', id: 'LIST' }],
    }),
    
    getUser: build.query({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),

    createUser: build.mutation({
      query(body) {
        return {
          url: `users`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all User-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created user could show up in any lists.
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),

    updateUser: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `users/${id}`,
          method: 'PATCH',
          body,
        }
      },
      // Invalidates all queries that subscribe to this User `id` only.
      // In this case, `getUser` will be re-run. `getUsers` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
    }),

    deleteUser: build.mutation({
      query(id) {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this User `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
    }),

    generateOtp: build.mutation({
      query(data) {
        const { username, ...body } = data
        return {
          url: `users_otp/${username}`,
          method: 'PATCH',
          body,
        }
      },
    }),

    resetPassword: build.mutation({
      query(data) {
        const { username, ...body } = data
        return {
          url: `users_reset_password/${username}`,
          method: 'PATCH',
          body,
        }
      },
    }),

    changePassword: build.mutation({
      query(data) {
        const { username, ...body } = data
        return {
          url: `users_change_password/123456`,
          method: 'PATCH',
          body,
        }
      },
    }),


  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGenerateOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi